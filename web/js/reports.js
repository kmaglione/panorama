var reports = {
    addons: {
        creation: {
            graphs: [
                {
                    url: 'reports/addons/creation.php',
                    options: {
                        chart: {
                            renderTo: 'addon-creation',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Add-ons Created by Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                }
            ]
        },
        downloads: {
            graphs: [
                {
                    url: 'reports/addons/downloads.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-downloads-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Add-on Downloads by Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' downloads</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                },
                {
                    url: 'reports/addons/downloads.php?graph=current',
                    options: {
                        chart: {
                            renderTo: 'addon-downloads-current',
                            defaultSeriesType: 'pie'
                        },
                        title: { text: 'Add-on Downloads by Type' },
                        subtitle: { text: 'yesterday' },
                        tooltip: {
                            formatter: function() {
                            	return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.y, 0) +' downloads (' + Highcharts.numberFormat(this.percentage, 2) + '%)';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                    }
                },
                {
                    url: 'reports/addons/downloads-sources.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-downloads-sources-history',
                            defaultSeriesType: 'area',
                            marginBottom: 160
                        },
                        title: { text: 'Add-on Downloads by Source' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' downloads</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                },
                {
                    url: 'reports/addons/downloads-sources.php?graph=current',
                    options: {
                        chart: {
                            renderTo: 'addon-downloads-sources-current',
                            defaultSeriesType: 'pie',
                            marginBottom: 130
                        },
                        title: { text: 'Add-on Downloads by Source' },
                        subtitle: { text: 'yesterday' },
                        tooltip: {
                            formatter: function() {
                            	return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.y, 0) +' downloads (' + Highcharts.numberFormat(this.percentage, 2) + '%)';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                    }
                }
            ]
        },
        eulas: {
            graphs: [
                {
                    url: 'reports/addons/eulas.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-eulas-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'EULA Distribution' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        impala: {
            type: 'html',
            filters: {
                url: 'reports/addons/impala.php?action=filters',
                defaults: {
                    'date': ''
                }
            },
            base_url: 'reports/addons/impala.php?action=html&date=%date%',
            url: null
        },
        impressions: {
            graphs: [
                {
                    url: 'reports/addons/impressions.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-impressions-history',
                            defaultSeriesType: 'area',
                            marginBottom: 90
                        },
                        title: { text: 'Adblock Plus Impressions by Source' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' impressions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                },
                {
                    url: 'reports/addons/impressions.php?graph=current',
                    options: {
                        chart: {
                            renderTo: 'addon-impressions-current',
                            defaultSeriesType: 'pie',
                            marginRight: 80
                        },
                        title: { text: 'Adblock Plus Impressions by Known Source' },
                        subtitle: { text: 'yesterday' },
                        tooltip: {
                            formatter: function() {
                            	return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.y, 0) +' impressions (' + Highcharts.numberFormat(this.percentage, 2) + '%)';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                    }
                }
            ]
        },
        packager: {
            graphs: [
                {
                    url: 'reports/addons/packager.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-packager-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Add-on Packager Use' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + ': <b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons created</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                },
                {
                    url: 'reports/addons/packager.php?graph=current',
                    options: {
                        chart: {
                            renderTo: 'addon-packager-current',
                            defaultSeriesType: 'pie',
                            marginRight: 80
                        },
                        title: { text: 'Add-on Packager Use by UI Element' },
                        subtitle: { text: 'yesterday' },
                        tooltip: {
                            formatter: function() {
                            	return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.y, 0) +' add-ons created (' + Highcharts.numberFormat(this.percentage, 2) + '%)';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                    }
                }
            ]
        },
        privacy: {
            graphs: [
                {
                    url: 'reports/addons/privacy.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-privacy-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Privacy Policy Distribution' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        publicstats: {
            graphs: [
                {
                    url: 'reports/addons/publicstats.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-publicstats-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Public Stats Distribution' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        reviews: {
            graphs: [
                {
                    url: 'reports/addons/reviews.php',
                    options: {
                        chart: {
                            renderTo: 'addon-reviews',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Reviews Added by Add-on Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + ': <b>'+
                            		Highcharts.numberFormat(this.y, 0) +' reviews</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                },
                {
                    url: 'reports/addons/ratings.php',
                    options: {
                        chart: {
                            renderTo: 'addon-ratings',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Ratings Added by Stars' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + ': <b>'+
                            		Highcharts.numberFormat(this.y, 0) +' ratings</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                }
            ]
        },
        status: {
            graphs: [
                {
                    url: 'reports/addons/status.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-status-history',
                            defaultSeriesType: 'spline',
                            marginBottom: 90
                        },
                        title: { text: 'Add-on Status' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/addons/status.php?graph=current',
                    options: {
                        chart: {
                            renderTo: 'addon-status-current',
                            defaultSeriesType: 'pie',
                            marginRight: 80
                        },
                        title: { text: 'Add-on Status' },
                        subtitle: { text: 'real-time data' },
                        tooltip: {
                            formatter: function() {
                            	return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.y, 0) +' add-ons (' + Highcharts.numberFormat(this.percentage, 2) + '%)';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        tags: {
            graphs: [
                {
                    url: 'reports/addons/tags.php',
                    options: {
                        chart: {
                            renderTo: 'addon-tags',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Tags Added by Add-on Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' tags</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                }
            ]
        },
        themeusage: {
            graphs: [
                {
                    url: 'reports/addons/themeusage.php',
                    options: {
                        chart: {
                            renderTo: 'addon-themeusage-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Theme Usage' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' themes</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        updatepings: {
            filters: {
                url: 'reports/addons/updatepings.php?action=filters',
                defaults: {
                    'type': 'Extensions'
                }
            },
            graphs: [
                {
                    base_subtitle: '',
                    base_url: 'reports/addons/updatepings.php?action=graph&graph=summary',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-updatepings-summary',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Add-on Update Pings by Type' },
                        subtitle: { base_text: '', text: '' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' update pings</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                },
                {
                    base_subtitle: '%type% only',
                    base_url: 'reports/addons/updatepings.php?action=graph&type=%type%&graph=status',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-updatepings-status',
                            defaultSeriesType: 'area',
                            marginBottom: 120
                        },
                        title: { text: 'Add-on Status' },
                        subtitle: { base_text: '%type% only', text: '' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' update pings</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                /*{
                    base_subtitle: '%type% only',
                    base_url: 'reports/addons/updatepings.php?action=graph&type=%type%&graph=application',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-updatepings-application',
                            defaultSeriesType: 'area',
                            marginBottom: 120
                        },
                        title: { text: 'Add-on Application' },
                        subtitle: { base_text: '%type% only', text: '' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' update pings</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },*/
                {
                    base_subtitle: '%type% only',
                    base_url: 'reports/addons/updatepings.php?action=graph&type=%type%&graph=os',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-updatepings-os',
                            defaultSeriesType: 'area',
                            marginBottom: 120
                        },
                        title: { text: 'Add-on OS' },
                        subtitle: { base_text: '%type% only', text: '' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' update pings</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_subtitle: '%type% only',
                    base_url: 'reports/addons/updatepings.php?action=graph&type=%type%&graph=locale',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-updatepings-locale',
                            defaultSeriesType: 'area',
                            marginBottom: 120
                        },
                        title: { text: 'Add-on Locale' },
                        subtitle: { base_text: '%type% only', text: '' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' update pings</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        viewsource: {
            graphs: [
                {
                    url: 'reports/addons/viewsource.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'addon-viewsource-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Public Source Viewing Distribution' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        }
    },
    collections: {
        creation: {
            graphs: [
                {
                    url: 'reports/collections/creation.php',
                    options: {
                        chart: {
                            renderTo: 'collection-creation',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Collections Created by Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' collections</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                }
            ]
        },
        privacy: {
            graphs: [
                {
                    url: 'reports/collections/privacy.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'collection-privacy-history',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Collection Privacy Distribution' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' collections</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                    }
                }
            ]
        },
        publishing: {
            graphs: [
                {
                    url: 'reports/collections/publishing.php',
                    options: {
                        chart: {
                            renderTo: 'collection-publishing',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Add-ons Published by Collection Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' add-ons</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                }
            ]
        },
        votes: {
            graphs: [
                {
                    url: 'reports/collections/votes.php',
                    options: {
                        chart: {
                            renderTo: 'collection-votes',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Collection Votes by Collection Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' votes</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                },
                {
                    url: 'reports/collections/votes-vote.php',
                    options: {
                        chart: {
                            renderTo: 'collection-votes-vote',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Collection Votes by Sentiment' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' votes</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                }
            ]
        },
        watchers: {
            graphs: [
                {
                    url: 'reports/collections/watchers.php',
                    options: {
                        chart: {
                            renderTo: 'collection-watchers',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Collections Watched by Collection Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' collections</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {
                        '*': {
                            visible: false
                        },
                        1: {
                            visible: true
                        }
                    }
                }
            ]
        }
    },
    contributions: {
        summary: {
            graphs: [
                {
                    url: 'reports/contributions/summary.php?graph=total',
                    options: {
                        chart: {
                            renderTo: 'contributions-summary-total',
                            defaultSeriesType: 'area'
                        },
                        title: { text: 'Contributions Received per Day' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        legend: {
                    		enabled: false
                    	},
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/summary.php?graph=amt',
                    options: {
                        chart: {
                            renderTo: 'contributions-summary-amt',
                            defaultSeriesType: 'line'
                        },
                        title: { text: 'Average, Maximum, and Minimum Contributions' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/summary.php?graph=suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-summary-suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Response to Suggested Contributions' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/summary.php?graph=tx',
                    options: {
                        chart: {
                            renderTo: 'contributions-summary-tx',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Transaction Completion' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' transactions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        annoyance: {
            graphs: [
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=amt_earned',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-amt_earned',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Received by Annoyance Level' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=amt_avg',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-amt_avg',
                            defaultSeriesType: 'spline',
                        },
                        title: { text: 'Average Contribution Amount by Annoyance Level' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=amt_min',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-amt_min',
                            defaultSeriesType: 'spline',
                        },
                        title: { text: 'Minimum Contribution Amount by Annoyance Level' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=amt_max',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-amt_max',
                            defaultSeriesType: 'line'
                        },
                        title: { text: 'Maximum Contribution Amount by Annoyance Level' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=amt_eq_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-amt_eq_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Equal to Suggested Amount by Annoyance Level' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=amt_gt_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-amt_gt_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Greater than Suggested Amount by Annoyance Level' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=amt_lt_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-amt_lt_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Less than Suggested Amount by Annoyance Level' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=tx_success',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-tx_success',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Succeeded by Annoyance Level' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/annoyance.php?graph=history&field=tx_abort',
                    options: {
                        chart: {
                            renderTo: 'contributions-annoyance-tx_abort',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Aborted by Annoyance Level' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        recipients: {
            graphs: [
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=amt_earned',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-amt_earned',
                            defaultSeriesType: 'spline',
                        },
                        title: { text: 'Contributions Received by Recipient Type' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=amt_avg',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-amt_avg',
                            defaultSeriesType: 'spline',
                        },
                        title: { text: 'Average Contribution Amount by Recipient Type' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=amt_min',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-amt_min',
                            defaultSeriesType: 'spline',
                        },
                        title: { text: 'Minimum Contribution Amount by Recipient Type' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=amt_max',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-amt_max',
                            defaultSeriesType: 'line',
                        },
                        title: { text: 'Maximum Contribution Amount by Recipient Type' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=amt_eq_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-amt_eq_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Equal to Suggested Amount by Recipient Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=amt_gt_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-amt_gt_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Greater than Suggested Amount by Recipient Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=amt_lt_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-amt_lt_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Less than Suggested Amount by Recipient Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=tx_success',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-tx_success',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Succeeded by Recipient Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/recipients.php?graph=history&field=tx_abort',
                    options: {
                        chart: {
                            renderTo: 'contributions-recipients-tx_abort',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Aborted by Recipient Type' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        sources: {
            graphs: [
                {
                    url: 'reports/contributions/sources.php?graph=history&field=amt_earned',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-amt_earned',
                            defaultSeriesType: 'spline',
                        },
                        title: { text: 'Contributions by Source' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=amt_avg',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-amt_avg',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Average Contribution Amount by Source' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=amt_min',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-amt_min',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Minimum Contribution Amount by Source' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=amt_max',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-amt_max',
                            defaultSeriesType: 'line'
                        },
                        title: { text: 'Maximum Contribution Amount by Source' },
                        yAxis: {
                            labels: { formatter: function() {
                                return '$' + Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>$'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=amt_eq_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-amt_eq_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Equal to Suggested Amount by Source' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=amt_gt_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-amt_gt_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Greater than Suggested Amount by Source' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=amt_lt_suggested',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-amt_lt_suggested',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Less than Suggested Amount by Source' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=tx_success',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-tx_success',
                            defaultSeriesType: 'spline',
                        },
                        title: { text: 'Contributions Succeeded by Source' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    url: 'reports/contributions/sources.php?graph=history&field=tx_abort',
                    options: {
                        chart: {
                            renderTo: 'contributions-sources-tx_abort',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Contributions Aborted by Source' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' contributions</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        }
    },
    ecosystem: {
        addonusage: {
            filters: {
                url: 'reports/ecosystem/addonusage.php?action=filters',
                defaults: {
                    'app': 'firefox'
                }
            },
            graphs: [
                {
                    base_url: 'reports/ecosystem/addonusage.php?action=graph&graph=total-usage&app=%app%',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'ecosystem-addonusage-total-usage',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Active Daily Add-ons' },
                        subtitle: { base_text: '%app%', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +' add-ons<br/>';
                            	});
                            	return s;
                            },
                            shared: true,
                            crosshairs: [ { width: 3 }]
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_url: 'reports/ecosystem/addonusage.php?action=graph&graph=users&app=%app%',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'ecosystem-addonusage-users',
                            defaultSeriesType: 'spline',
                            marginRight: 60,
                            marginBottom: 85
                        },
                        title: { text: 'Add-on Users' },
                        subtitle: { base_text: '%app%', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    if (i == 3 || i == 4)
                            	        s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +'%<br/>';
                            	    else
                            	        s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +' users<br/>';
                            	});
                            	return s;
                            },
                            shared: true,
                            crosshairs: [ { width: 3 }]
                        },
                        yAxis: [
                            {
                                title: {
                    		        text: 'Users',
                    		        style: {
                    		            color: '#4572A7'
                    		        }
                    		    }
                            },
                            {
                                title: {
                    		        text: 'Penetration',
                    		        style: {
                    		            color: '#4572A7'
                    		        }
                    		    },
                                max: '100',
                                labels: {
                                    formatter: function() {
                        		        return Highcharts.numberFormat(this.value, 0) + '%';
                        		    }
                        		},
                        		opposite: true
                            }
                        ],
                        series: []
                    },
                    specificSeries: {
                        4: {
                            yAxis: 1,
                            dashStyle: 'shortdot'
                        },
                        5: {
                            yAxis: 1,
                            dashStyle: 'shortdot'
                        }
                    }
                },
                {
                    base_url: 'reports/ecosystem/addonusage.php?action=graph&graph=total-counts&app=%app%',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'ecosystem-addonusage-total-counts',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Individual Add-ons' },
                        subtitle: { base_text: '%app%', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +' add-ons<br/>';
                            	});
                            	return s;
                            },
                            shared: true,
                            crosshairs: [ { width: 3 }]
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_url: 'reports/ecosystem/addonusage.php?action=graph&graph=distro&app=%app%&limit=50',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'ecosystem-addonusage-distro',
                            defaultSeriesType: 'column'
                        },
                        title: { text: 'User-Installed Add-ons Distribution' },
                        subtitle: { base_text: '%app%', text: '' },
                        tooltip: {
                            formatter: function() {
                            	return '<b>'+ this.point.name +' add-ons installed</b><br/>'+ Highcharts.numberFormat(this.y, 0) +' users';
                            }
                        },
                        xAxis: {
                    		type: 'linear',
                    		maxZoom: null,
                    		labels: {
                    		    formatter: function() {
                    		        return this.value;
                    		    }
                    		}
                    	},
                    	legend: { enabled: false },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_url: 'reports/ecosystem/addonusage.php?action=graph&graph=avg&app=%app%',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'ecosystem-addonusage-avg',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Average Add-ons per User' },
                        subtitle: { base_text: '%app%', text: '' },
                        yAxis: {
                            labels: { formatter: function() {
                                return Highcharts.numberFormat(this.value, 2);
                            }}
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 2) +'</b> add-ons per user';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        topaddons: {
            type: 'html',
            url: 'reports/ecosystem/topaddons.php'
        }
    },
    editors: {
        queues: {
            graphs: [
                {
                    url: 'reports/editors/queues.php',
                    options: {
                        chart: {
                            renderTo: 'editors-queues',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Editor Review Queues' },
                        yAxis: {
                            title: { text: 'Add-ons in Queue' }
                        },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%a, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) + ' ' + this.series.name.toLowerCase() + '</b>';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        }
    },
    marketplace: {
        overview: {
            type: 'html',
            url: 'reports/marketplace/overview.php'
        }
    },
    performance: {
        startupdistro: {
            filters: {
                url: 'reports/performance/startupdistro.php?action=filters',
                defaults: {
                    'app': 'firefox',
                    'os': 'WINNT',
                    'version': '4.0',
                    'date': ''
                }
            },
            graphs: [
                {
                    base_subtitle: '%app% / %os% / %version%',
                    base_url: 'reports/performance/startupdistro.php?action=graph&graph=distro-sec&date=%date%&app=%app%&os=%os%&version=%version%&limit=31',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-startupdistro-distro-sec',
                            defaultSeriesType: 'column'
                        },
                        title: { text: 'Start-up Time (30 seconds and under)' },
                        subtitle: { base_text: '%date% / %app% / %os% / %version%', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + this.x + ' seconds:</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +' users<br/>';
                            	});
                            	return s;                            	
                            },
                            shared: true
                        },
                        xAxis: {
                    		type: 'linear',
                    		maxZoom: null,
                    		labels: {
                    		    formatter: function() {
                    		        return Highcharts.numberFormat(this.value, 0) + 's';
                    		    }
                    		}
                    	},
                    	plotOptions: {
                    	    column: {
                    	        shadow: false
                    	    }
                    	},
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_url: 'reports/performance/startupdistro.php?action=graph&graph=median&app=%app%&os=%os%&version=%version%',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-startupdistro-median',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Median Start-up Time' },
                        subtitle: { base_text: '%app% / %os% / %version%', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +'ms median<br/>';
                            	});
                            	return s;                            	
                            },
                            shared: true,
                            crosshairs: [ { width: 3 }]
                        },
                        yAxis: {
                            labels: {
                    		    formatter: function() {
                    		        return Highcharts.numberFormat(this.value, 0) + 'ms';
                    		    }
                    		}
                        },
                        plotOptions: {
                            spline: {
                                marker: { 
                                    enabled: true,
                                    states: {
                                        hover: {
                                            radius: 6
                                        }
                                    }
                                }
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_url: 'reports/performance/startupdistro.php?action=graph&graph=average&app=%app%&os=%os%&version=%version%',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-startupdistro-average',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'Average Start-up Time' },
                        subtitle: { base_text: '%app% / %os% / %version%', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +'ms average<br/>';
                            	});
                            	return s;                            	
                            },
                            shared: true,
                            crosshairs: [ { width: 3 }]
                        },
                        yAxis: {
                            labels: {
                    		    formatter: function() {
                    		        return Highcharts.numberFormat(this.value, 0) + 'ms';
                    		    }
                    		}
                        },
                        plotOptions: {
                            spline: {
                                marker: { 
                                    enabled: true,
                                    states: {
                                        hover: {
                                            radius: 6
                                        }
                                    }
                                }
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_url: 'reports/performance/startupdistro.php?action=graph&graph=count&app=%app%&os=%os%&version=%version%',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-startupdistro-count',
                            defaultSeriesType: 'spline',
                            marginRight: 90
                        },
                        title: { text: 'Start-up Population Size' },
                        subtitle: { base_text: '%app% / %os% / %version%', text: '' },
                        tooltip: {},
                        yAxis: {
                            labels: {
                		        formatter: function() {
                		            return Highcharts.numberFormat(this.value, 0);
                		        }
                		    }
                		},
                        plotOptions: {
                            spline: {
                                marker: { 
                                    enabled: true,
                                    states: {
                                       hover: {
                                           radius: 6
                                       }
                                    }
                                },
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                },
                {
                    base_subtitle: '%app% (all platforms)',
                    base_url: 'reports/performance/startupdistro.php?action=graph&graph=addons-median&date=%date%&app=%app%&os=%os%&version=%version%&limit=31',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-startupdistro-addons-median',
                            defaultSeriesType: 'column'
                        },
                        title: { text: 'Median Start-up by Add-ons Installed' },
                        subtitle: { base_text: '%app% (all platforms)', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + this.x + ' add-ons:</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    if (i == 3)
                            	        s += '<span style="color: #999999;">' + Highcharts.numberFormat(point.y, 0) + ' users</span><br/>';
                            	    else
                            	        s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +'ms<br/>';
                            	});
                            	return s;                            	
                            },
                            shared: true
                        },
                        xAxis: {
                    		type: 'linear',
                    		maxZoom: null,
                    		labels: {
                    		    formatter: function() {
                    		        return Highcharts.numberFormat(this.value, 0) + ' add-ons';
                    		    }
                    		}
                    	},
                    	yAxis: [
                        	{
                                labels: {
                        		    formatter: function() {
                        		        return Highcharts.numberFormat(this.value, 0) + 'ms';
                        		    }
                        		}
                            },
                            {
                                labels: {
                        		    formatter: function() {
                        		        return;
                        		    }
                        		},
                        		opposite: true
                            }
                        ],
                    	plotOptions: {
                    	    column: {
                    	        shadow: false
                    	    }
                    	},
                        series: []
                    },
                    specificSeries: {
                        4: {
                            yAxis: 1,
                            type: 'spline',
                            color: '#CCCCCC'
                        }
                    }
                },
                {
                    base_subtitle: '%app% (all platforms)',
                    base_url: 'reports/performance/startupdistro.php?action=graph&graph=addons-avg&date=%date%&app=%app%&os=%os%&version=%version%&limit=31',
                    url: null,
                    options: {
                        chart: {
                            renderTo: 'addon-startupdistro-addons-avg',
                            defaultSeriesType: 'column'
                        },
                        title: { text: 'Average Start-up by Add-ons Installed' },
                        subtitle: { base_text: '%app% (all platforms)', text: '' },
                        tooltip: {
                            formatter: function() {
                            	var s = '<b>' + this.x + ' add-ons:</b><br/>';
                            	$.each(this.points, function(i, point) {
                            	    if (i == 3)
                            	        s += '<span style="color: #999999;">' + Highcharts.numberFormat(point.y, 0) + ' users</span><br/>';
                            	    else
                            	        s += '<span style="color: ' + point.series.color + ';">' + point.series.name + ':</span> ' + Highcharts.numberFormat(point.y, 0) +'ms<br/>';
                            	});
                            	return s;                            	
                            },
                            shared: true
                        },
                        xAxis: {
                    		type: 'linear',
                    		maxZoom: null,
                    		labels: {
                    		    formatter: function() {
                    		        return Highcharts.numberFormat(this.value, 0) + ' add-ons';
                    		    }
                    		}
                    	},
                    	yAxis: [
                        	{
                                labels: {
                        		    formatter: function() {
                        		        return Highcharts.numberFormat(this.value, 0) + 'ms';
                        		    }
                        		}
                            },
                            {
                                labels: {
                        		    formatter: function() {
                        		        return;
                        		    }
                        		},
                        		opposite: true
                            }
                        ],
                    	plotOptions: {
                    	    column: {
                    	        shadow: false
                    	    }
                    	},
                        series: []
                    },
                    specificSeries: {
                        4: {
                            yAxis: 1,
                            type: 'spline',
                            color: '#CCCCCC'
                        }
                    }
                }
            ]
        },
        addonimpact: {
            type: 'html',
            filters: {
                url: 'reports/performance/addonimpact.php?action=filters',
                defaults: {
                    'os': 'WINNT',
                    'date': ''
                }
            },
            base_url: 'reports/performance/addonimpact.php?action=html&date=%date%&os=%os%',
            url: null
        }
    },
    services: {
        api: {
            graphs: [
                {
                    url: 'reports/services/api.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'services-api-history',
                            defaultSeriesType: 'spline'
                        },
                        title: { text: 'API Requests' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' requests</b> (' + this.series.name + ')';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        },
        discovery: {
            graphs: [
                {
                    url: 'reports/services/discovery.php?graph=history',
                    options: {
                        chart: {
                            renderTo: 'services-discovery-history',
                            defaultSeriesType: 'spline',
                            marginBottom: 100
                        },
                        title: { text: 'Discovery Pane Interactions' },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        }
    },
    users: {
        creation: {
            graphs: [
                {
                    url: 'reports/users/creation.php',
                    options: {
                        chart: {
                            renderTo: 'user-creation',
                            defaultSeriesType: 'area'
                        },
                        legend: { enabled: false },
                        title: { text: 'New Users' },
                        tooltip: {
                            formatter: function() {
                            	return ''+
                            		Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '<br/><b>'+
                            		Highcharts.numberFormat(this.y, 0) +' users created</b>';
                            }
                        },
                        series: []
                    },
                    specificSeries: {}
                }
            ]
        }
    }
};