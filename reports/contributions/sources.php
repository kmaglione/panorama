<?php
require_once dirname(dirname(dirname(__FILE__))).'/lib/report.class.php';

class ContributionSources extends Report {
    public $table = 'contributions_sources';
    public $backfillable = true;

    /**
     * Pull data and store it for a single day's report
     */
    public function analyzeDay($date = '') {
        if (empty($date))
            $date = date('Y-m-d');
        
        $insert = array();
        
        $fieldvals = array(
            'addon-detail' => 'addondetail',
            'developers' => 'developers',
            'direct' => 'direct',
            'meet-the-developer' => 'meetthedeveloper',
            'meet-the-developer-post-install' => 'meetthedeveloper_postinstall',
            'meet-the-developer-roadblock' => 'meetthedeveloper_roadblock'
        );
        
        $queries = array(
            'amt_earned' => "SELECT SUM(amount) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND source = '%FIELDVAL%'",
            'amt_avg' => "SELECT AVG(amount) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND source = '%FIELDVAL%'",
            'amt_min' => "SELECT MIN(amount) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND source = '%FIELDVAL%'",
            'amt_max' => "SELECT MAX(amount) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND source = '%FIELDVAL%'",
            'amt_eq_suggested' => "SELECT COUNT(*) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND 0+amount = 0+suggested_amount AND source = '%FIELDVAL%'",
            'amt_gt_suggested' => "SELECT COUNT(*) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND 0+amount > 0+suggested_amount AND source = '%FIELDVAL%'",
            'amt_lt_suggested' => "SELECT COUNT(*) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND 0+amount < 0+suggested_amount AND source = '%FIELDVAL%'",
            'tx_success' => "SELECT COUNT(*) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NOT NULL AND source = '%FIELDVAL%'"
            //'tx_abort' => "SELECT COUNT(*) FROM stats_contributions WHERE DATE(created) = '%DATE%' AND transaction_id IS NULL AND source = '%FIELDVAL%'"
        );
        
        foreach ($fieldvals as $fieldval => $fielddesc) {
            foreach ($queries as $queryname => $query) {
                $qry = str_replace('%DATE%', $date, $query);
                $qry = str_replace('%FIELDVAL%', $fieldval, $qry);
                
                $_rows = $this->db->query_amo($qry);
                $row = mysql_fetch_array($_rows, MYSQL_NUM);
                
                if (empty($row[0]))
                    $row[0] = 0;
                
                $insert["{$fielddesc}_{$queryname}"] = $row[0];
            }
        }
        
        $qry = "INSERT INTO {$this->table} (date, ".implode(', ', array_keys($insert)).") VALUES ('{$date}', ".implode(', ', $insert).")";
        
        if ($this->db->query_stats($qry))
            $this->log("{$date} - Inserted row");
        else
            $this->log("{$date} - Problem inserting row");
    }
    
    /**
     * Generate the CSV for graphs
     */
     public function generateCSV($graph, $field) {
         $plots = array(
             "addondetail_{$field}" => 'Add-on Details',
             "developers_{$field}" => 'Meet the Developers',
             "direct_{$field}" => 'Direct',
             "meetthedeveloper_{$field}" => 'Meet the Developer',
             "meetthedeveloper_postinstall_{$field}" => 'MTD Post-install',
             "meetthedeveloper_roadblock_{$field}" => 'MTD Roadblock',
         );
     
         if ($graph == 'current') {
             echo "Label,Count\n";
         
             $_values = $this->db->query_stats("SELECT ".implode(', ', array_keys($plots))." FROM {$this->table} ORDER BY date DESC LIMIT 1");
             $values = mysql_fetch_array($_values, MYSQL_ASSOC);
         
             foreach ($values as $plot => $value) {
                 echo "{$plots[$plot]},{$value}\n";
             }
         }
         elseif ($graph == 'history') {
             echo "Date,".implode(',', $plots)."\n";
             
             $dates = $this->db->query_stats("SELECT date, ".implode(', ', array_keys($plots))." FROM {$this->table} ORDER BY date");
             while ($date = mysql_fetch_array($dates, MYSQL_ASSOC)) {
                 echo implode(',', $date)."\n";
             }
         }
     }
}

// If this is not being controlled by something else, output the CSV by default
if (!defined('OVERLORD')) {
    $graph = !empty($_GET['graph']) ? $_GET['graph'] : 'current';
    $field = !empty($_GET['field']) ? mysql_real_escape_string($_GET['field']) : '';
    $report = new ContributionSources;
    $report->generateCSV($graph, $field);
}

?>