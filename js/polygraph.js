
$(document).ready(function() {
    polygraph.getReport(reports.addons.creation);
});

var polygraph = {
    
    getReport: function(report) {
        for (var i in report.graphs) {
            var chart = report.graphs[i];
            
            $.get(chart.url, function(data) {
                eval(data);
                
                chart.options.series = series;
            
                polygraph.newContainer(chart.options.chart.renderTo);
                polygraph.createChart(chart.options);
            });
        }
    },
    
    newContainer: function(id) {
        $('#content').append('<div id="' + id + '" class="graph"></div>');
    },
    
    createChart: function(options) {
    	return new Highcharts.Chart(options);
    }
};

var reports = {
    addons: {
        creation: {
            graphs: [
                {
                    url: 'reports/addons/creation.php',
                    options: {
                        chart: {
                            renderTo: 'addon-creation'
                        },
                        title: { text: 'Add-ons Created per Day' },
                        subtitle: { text: 'by Add-on Type' },
                        yAxis: {
                            title: { text: 'Add-ons Created' }
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A %B %e %Y', this.x) + ': '+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons';
                            }
                        },
                        series: []
                    }
                }
            ]
        }
    }
};

// Set default chart options
Highcharts.setOptions({
	chart: {
		renderTo: 'chart',
		zoomType: 'x'
	},
    title: {
		text: ''
	},
    subtitle: {
		text: ''
	},
	xAxis: {
		type: 'datetime',
		maxZoom: 14 * 24 * 3600000, // fourteen days
		title: {
			text: null
		}
	},
	yAxis: {
		title: {
			text: ''
		},
		min: 0.6,
		startOnTick: false,
		showFirstLabel: false
	},
	tooltip: {
		formatter: function() {
			return ''+
				Highcharts.dateFormat('%A %B %e %Y', this.x) + ': '+
				Highcharts.numberFormat(this.y, 0);
		}
	},
    legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		x: -10,
		y: 100,
		borderWidth: 0
	},
	plotOptions: {
		area: {
			fillColor: {
				linearGradient: [0, 0, 0, 300],
				stops: [
					[0, '#4572A7'],
					[1, 'rgba(2,0,0,0)']
				]
			},
			lineWidth: 1,
			marker: {
				enabled: false,
				states: {
					hover: {
						enabled: true,
						radius: 5
					}
				}
			},
			shadow: false,
			states: {
				hover: {
					lineWidth: 1						
				}
			}
		},
		line: {
		    lineWidth: 1,
		    marker: { enabled: false },
		    shadow: false
		}
	},
	series: []
});