from __future__ import division # holy crap, python
import collections
import sys
import re
import urllib2
import json
import hive
from lifter import Lifter
from settings import *

class AddonUsage(Lifter):
    """This lifter looks through daily add-on metadata pings and gathers
    lots of data about the ecosystem for that day, like the number of 
    users with add-ons, how many of the add-ons are hosted on AMO, etc."""
    
    def lift(self):
        for app in ['firefox', 'mobile', 'seamonkey']:
            self.log('Starting %s' % app)
            hive_file = self.hive_data(app)
            data = self.calculate_usage(hive_file, app)
            self.commit(data, app)
            self.hive_cleanup(hive_file)
    
    def hive_data(self, app):
        """Performs a HIVE query and writes it to a text file."""
        
        if HIVE_ALTERNATE is not None:
            self.log('Hive alternate file used')
            return HIVE_ALTERNATE
        
        self.log('Starting HIVE query...')
        if app == 'mobile':
            hive_file = hive.query("""SELECT guid, COUNT(1) as num 
                        FROM addons_pings WHERE ds = '{date}' AND src='{app}'  
                        GROUP BY guid ORDER BY num;""".format(date=self.date, app=app))
        else:
            hive_file = hive.query("""SELECT guid, COUNT(1) as num 
                        FROM addons_pings WHERE ds = '{date}' AND src='{app}' AND 
                        guid LIKE '%972ce4c6-7e08-4474-a285-3208198ce6fd%' 
                        GROUP BY guid ORDER BY num;""".format(date=self.date, app=app))
        
        self.time_event('hive_data')
        self.log('HIVE data obtained')
        
        return hive_file

    def calculate_usage(self, hive_file, app):
        """This function reads a file of add-on GUID combinations and records
        how many times they occur, along with additional usage information."""
        
        self.log('Calculating usage...')
        
        # These GUIDs aren't installed by the user and don't count towards an
        # "add-on user" but are still stored in the DB
        not_counted = [
            'testpilot%40labs\.mozilla\.com', # Test Pilot (installed in betas)
            '%7B972ce4c6-7e08-4474-a285-3208198ce6fd%7D', # Default theme
            '%7B20a82645-c095-46ed-80e3-08825760534b%7D', # .NET Framework assistant
            '%7BCAFEEFAC-.+-ABCDEFFEDCBA%7D', # Java Console
            'jqs%40sun\.com', # Java Quick Start
            '\d+%40personas\.mozilla\.org', # Personas
            '\d+$', # Greasemonkey scripts
            '.+%40greasespot.net', # Greasemonkey scripts
        ]
        # These GUIDs aren't stored in the DB
        not_stored = [
            '\d+$',
            '.+%40greasespot.net',
            '\d+%40personas\.mozilla\.org',
        ]
        
        not_counted = re.compile('(%s)' % '|'.join(not_counted))
        not_stored = re.compile('(%s)' % '|'.join(not_stored))

        users_with_addons = 0
        addons_installed = 0
        guids = collections.defaultdict(int)
        install_distro = collections.defaultdict(int)

        with open(hive_file) as f:
            for line in f:
                _guids, _count = line.split()
                _count = int(_count)
                addon_user = False
                counted_guids = 0
                
                for guid in _guids.split(','):
                    if guid[-1:] == '?':
                        guid = guid[:-1]
                    if not not_stored.match(guid):
                        guids[urllib2.unquote(guid)] += _count
                    if not not_counted.match(guid):
                        addon_user = True
                        counted_guids += 1
                        addons_installed += _count
    
                if addon_user is True:
                    users_with_addons += _count
                
                install_distro[counted_guids] += _count
        
        self.log('GUIDs from file processed')
        addons_installed_all = sum(guids.itervalues())
        if users_with_addons > 0:
            average_installed = round(addons_installed / users_with_addons, 2)
        else:
            average_installed = 0
        unique_guids = len(guids)
        amo = self.check_amo(guids)
        adu = self.get_adu(app)
        if adu > 0:
            penetration_adu = round(users_with_addons / adu, 2)
        else:
            penetration_adu = 0
        
        if guids['{972ce4c6-7e08-4474-a285-3208198ce6fd}'] > 0:
            penetration = round(users_with_addons / guids['{972ce4c6-7e08-4474-a285-3208198ce6fd}'], 2)
        else:
            penetration = 0
        
        self.log('Additional calculations made')
        self.time_event('calculate_usage')
        
        return {
            'ecosystem_topaddons': guids,
            'ecosystem_addonusage': {
                'date': self.date,
                'users_with_addons': users_with_addons,
                'addons_installed': addons_installed,
                'addons_installed_all': addons_installed_all,
                'average_installed': average_installed,
                'unique_guids': unique_guids,
                'penetration': penetration,
                'penetration_adu': penetration_adu,
                'amo_known_count': amo['known_count'],
                'amo_known_adu': amo['known_adu'],
                'amo_active_count': amo['active_count'],
                'amo_active_adu': amo['active_adu'],
                'distro': json.dumps(install_distro),
            },
        }
    
    def check_amo(self, guids):
        """Pull all known GUIDs from AMO and compare to our set."""
        
        known_count = 0
        known_adu = 0
        active_count = 0
        active_adu = 0
        known_guids = {}
        
        db = self.get_database('amo').cursor()
        db.execute("SELECT guid, status, inactive FROM addons WHERE guid IS NOT NULL AND guid != '' AND addontype_id != 9")
        self.log('%d GUIDs pulled from AMO' % db.rowcount)
        for r in db.fetchall():
            known_guids[r[0]] = (r[1], r[2])
        
        for guid, count in guids.iteritems():
            if guid in known_guids:
                known_count += 1
                known_adu += count
                
                g = known_guids[guid]
                if g[0] in (4, 8) and g[1] == 0:
                    active_count += 1
                    active_adu += count
        
        db.close()
        self.log('AMO matching finished')
        self.time_event('check_amo')
        return {
            'known_count': known_count,
            'known_adu': known_adu,
            'active_count': active_count,
            'active_adu': active_adu
        }
    
    def get_adu(self, app):
        """Gets application ADUs for the date from metrics."""
        
        if app == 'firefox':
            product_name = 'Firefox'
            product_version = '4.0'
        elif app == 'mobile':
            product_name = 'Fennec'
            product_version = '4.0'
        else:
            return 0
        
        db = self.get_database('metrics').cursor()
        db.execute("SELECT SUM(adu_count) FROM raw_adu WHERE date = '%s' AND product_name = '%s' AND product_version >= '%s'" % (self.date, product_name, product_version))
        adu = int(db.fetchall()[0][0])
        
        self.log('%d active daily users (%s)' % (adu, app))
        
        return adu

    def commit(self, data, app):
        """Save our findings to the db."""
        
        data['ecosystem_addonusage']['app'] = app
        db = self.get_database().cursor()
        self.log('Inserting ecosystem_addonusage...')
        db.execute("""INSERT INTO ecosystem_addonusage (%s) 
                    VALUES ('%s')""" % (', '.join(data['ecosystem_addonusage']), 
                    "','".join(map(str, data['ecosystem_addonusage'].values()))))
        
        if app == 'firefox':
            self.log('Inserting ecosystem_topaddons...')
            for guid, count in data['ecosystem_topaddons'].iteritems():
                if count >= 10:
                    db.execute("""INSERT INTO ecosystem_topaddons (date, guid, installs)
                                VALUES ('%s', '%s', %d)""" % (self.date, guid, count))

        db.close()

if __name__ == '__main__':
    AddonUsage()