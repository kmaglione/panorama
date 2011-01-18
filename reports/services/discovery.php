<?php
require_once dirname(dirname(dirname(__FILE__))).'/lib/report.class.php';

class ServicesDiscovery extends Report {
    public $table = 'services_discovery';
    public $backfillable = true;
    public $cron_type = 'yesterday';
    
    /**
     * Pull data and store it for a single day's report
     */
    public function analyzeDay($date = '') {
        if (empty($date))
            $date = date('Y-m-d', strtotime('yesterday'));
        
        $data_dir = HADOOP_DATA.'/'.$date;
        
        $pane = file_get_contents($data_dir.'/discovery.txt');
        $details = file_get_contents($data_dir.'/discovery-details.txt');
        
        $qry = "INSERT INTO {$this->table} (date, pane, details) VALUES ('{$date}', {$pane}, {$details})";

        if ($this->db->query_stats($qry))
            $this->log("{$date} - Inserted row ({$total} total)");
        else
            $this->log("{$date} - Problem inserting row ({$total} total)");
    }
    
    /**
     * Generate the CSV for graphs
     */
     public function generateCSV($graph) {
         $columns = array(
             'pane' => 'Main Pane',
             'details' => 'Details View',
             'downloads_pane' => 'Downloads from Pane',
             'downloads_details' => 'Downloads from Details'
         );

         if ($graph == 'current') {
             echo "Label,Count\n";

             $_values = $this->db->query_stats("SELECT pane, details FROM {$this->table} ORDER BY date DESC LIMIT 1");
             $values = mysql_fetch_array($_values, MYSQL_ASSOC);

             foreach ($values as $column => $value) {
                 echo "{$columns[$column]},{$value}\n";
             }
         }
         elseif ($graph == 'history') {
             echo "Date,".implode(',', $columns)."\n";

             $dates = $this->db->query_stats("SELECT d.date, d.pane, d.details, IFNULL(ads.discovery_pane, 0) AS downloads_pane, IFNULL(ads.discovery_pane_details, 0) AS downloads_details FROM {$this->table} AS d LEFT JOIN addons_downloads_sources AS ads ON ads.date = d.date ORDER BY d.date");
             while ($date = mysql_fetch_array($dates, MYSQL_ASSOC)) {
                 echo implode(',', $date)."\n";
             }
         }
     }
 }

 // If this is not being controlled by something else, output the CSV by default
 if (!defined('OVERLORD')) {
     $graph = !empty($_GET['graph']) ? $_GET['graph'] : 'current';
     $report = new ServicesDiscovery;
     $report->generateCSV($graph);
 }

?>