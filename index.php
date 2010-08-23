<!DOCTYPE html>
<html lang="en">

<head>
    <title>panorama</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
    <header>
        <div class="corner"></div>
        <h1>panorama</h1>
    </header>
    
    <nav>
        <ul>
            <li>add-ons</li>
            <ul>
                <li><a href="#addon-categories" onclick="panorama.getReport(reports.addons.categories, this);" class="todo">categories</a></li>
                <li><a href="#addon-contributions" onclick="panorama.getReport(reports.addons.contributions, this);" class="todo">contributions</a></li>
                <li><a href="#addon-creation" onclick="panorama.getReport(reports.addons.creation, this, this);">creation</a></li>
                <li><a href="#addon-downloads" onclick="panorama.getReport(reports.addons.downloads, this);" class="todo">downloads (sources)</a></li>
                <li><a href="#addon-eulas" onclick="panorama.getReport(reports.addons.eulas, this);">eulas</a></li>
                <li><a href="#addon-license" onclick="panorama.getReport(reports.addons.license, this);" class="todo">license</a></li>
                <li><a href="#addon-privacy" onclick="panorama.getReport(reports.addons.privacy, this);">privacy policies</a></li>
                <li><a href="#addon-publicstats" onclick="panorama.getReport(reports.addons.publicstats, this);">public stats</a></li>
                <li><a href="#addon-shares" onclick="panorama.getReport(reports.addons.shares, this);" class="todo">shares</a></li>
                <li><a href="#addon-status" onclick="panorama.getReport(reports.addons.status, this);" class="todo">status</a></li>
                <li><a href="#addon-tags" onclick="panorama.getReport(reports.addons.tags, this);" class="todo">tags</a></li>
                <li><a href="#addon-themes" onclick="panorama.getReport(reports.addons.themes, this);" class="todo">theme usage</a></li>
                <li><a href="#addon-translations" onclick="panorama.getReport(reports.addons.translations, this);" class="todo">translations</a></li>
                <li><a href="#addon-updatepings" onclick="panorama.getReport(reports.addons.updatepings, this);" class="todo">update pings</a></li>
                <li><a href="#addon-reviews" onclick="panorama.getReport(reports.addons.reviews, this);" class="todo">user reviews</a></li>
                <li><a href="#addon-viewsource" onclick="panorama.getReport(reports.addons.viewsource, this);">view source</a></li>
            </ul>
            
            <li>collections</li>
            <ul>
                <li><a href="#collection-creation" onclick="panorama.getReport(reports.collections.creation, this);" class="todo">creation</a></li>
                <li><a href="#collection-published" onclick="panorama.getReport(reports.collections.published, this);" class="todo">published add-ons</a></li>
                <li><a href="#collection-votes" onclick="panorama.getReport(reports.collections.votes, this);" class="todo">votes</a></li>
                <li><a href="#collection-watchers" onclick="panorama.getReport(reports.collections.watchers, this);" class="todo">watchers</a></li>
            </ul>
            
            <li>editors</li>
            <ul>
                <li><a href="#editors-queues" onclick="panorama.getReport(reports.editors.queues, this);">queues</a></li>
                <li><a href="#editors-activity" onclick="panorama.getReport(reports.editors.activity, this);" class="todo">activity</a></li>
            </ul>
            
            <li>threat assessment</li>
            <ul>
                <li><a href="#threat-new" onclick="panorama.getReport(reports.threat.new, this);" class="todo">new add-ons</a></li>
                <li><a href="#threat-spam" onclick="panorama.getReport(reports.threat.spam, this);" class="todo">spam reviews</a></li>
            </ul>
            
            <li>users</li>
            <ul>
                <li><a href="#user-activity" onclick="panorama.getReport(reports.users.activity, this);" class="todo">activity</a></li>
                <li><a href="#user-creation" onclick="panorama.getReport(reports.users.creation, this);" class="todo">creation</a></li>
                <li><a href="#user-confirmation" onclick="panorama.getReport(reports.users.confirmation, this);" class="todo">confirmation</a></li>
                <li><a href="#user-deletion" onclick="panorama.getReport(reports.users.creation, this);" class="todo">deletion</a></li>
                <li><a href="#user-pictures" onclick="panorama.getReport(reports.users.deletion, this);" class="todo">pictures</a></li>
            </ul>
        </ul>
    </nav>
    
    <section id="content">
    
    </section>
    
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="js/highcharts.js"></script>
	<script type="text/javascript" src="js/reports.js"></script>
	<script type="text/javascript" src="js/panorama.js"></script>
</body>
</html>
