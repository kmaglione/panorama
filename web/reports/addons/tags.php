<?php
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/lib/report.class.php';

class AddonTags extends Report {
    public $table = 'addons_tags';
    public $backfillable = true;
    
    /**
     * Pull data and store it for a single day's report
     */
    public function analyzeDay($date = '') {
        if (empty($date))
            $date = date('Y-m-d');
        
        $qry = "SELECT addontype_id, COUNT(*) FROM addons INNER JOIN users_tags_addons ON users_tags_addons.addon_id = addons.id WHERE DATE(users_tags_addons.created) = '%DATE%' GROUP BY addontype_id ORDER BY addontype_id";
        
        $_types = $this->db->query_amo(str_replace('%DATE%', $date, $qry));
        
        $fields = '';
        $values = '';
        $total = 0;
        if (mysql_num_rows($_types) > 0) {
            while ($type = mysql_fetch_array($_types, MYSQL_NUM)) {
                $fields .= ", type{$type[0]}";
                $values .= ','.$type[1];
                $total += $type[1];
            }
        }
        
        $qry = "INSERT INTO {$this->table} (date, total{$fields}) VALUES ('{$date}', {$total}{$values})";

        if ($this->db->query_stats($qry))
            $this->log("{$date} - Inserted row ({$total} total)");
        else
            $this->log("{$date} - Problem inserting row ({$total} total)");
    }
    
    /**
     * Generate the CSV for graphs
     */
    public function generateCSV() {
        echo "Date,All Types,Extensions,Themes,Dictionaries,Search Providers,Language Packs,Personas\n";

        $dates = $this->db->query_stats("SELECT date, total, type1, type2, type3, type4, type5, type9 FROM {$this->table} ORDER BY date");
        while ($date = mysql_fetch_array($dates, MYSQL_NUM)) {
            echo implode(',', $date)."\n";
        }
    }
}

// If this is not being controlled by something else, output the CSV by default
if (!defined('OVERLORD')) {
    $report = new AddonTags;
    $report->generateCSV();
}

?>