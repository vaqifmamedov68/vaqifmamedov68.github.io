var chartOptions = {
    "type": "serial",
    "theme": "light",
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "chartCursor": {
        "limitToGraph":"g1"
    },
    "graphs": [{
        "id": "g1",
        "title": "red line",
        "valueField": "value",
        "hideBulletsCount": 50,


        "bullet": "round",
        "bulletColor": "#3083c7",
        "fillAlphas": 0.5,
        "fillColor": "#3083c7",
        "lineThickness": 1,
        "lineColor": "#3083c7",
        "lineAlpha": 0.5
    }],
    "chartScrollbar": {
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 30,
        "autoGridCount": true,
        "backgroundColor": "#cbe2f2",
        "backgroundAlpha": 0.3,
        "selectedBackgroundColor": "#cbe2f2",
        "strokeColor": "#000",
        "selectedGraphFillAlpha": 1,
        "color": "#5e6366",
        "dragIcon": "../../../img/new/graph_trim.svg",
    },
    "categoryAxis": {
        "gridColor": "#fff",  
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": false,
        "labelsEnabled": false
    },
    "valueAxes": [ {
        "gridColor": "#000",
        "dashLength": 4,
    }],
    "dataProvider": getData()
};

var chartOptions2 = {
    "type": "serial",
    "theme": "light",
    "dataDateFormat": "YYYY-MM-DD",
    "graphs": [{
        "id": "g3",
        "type": "column",
        "title": "clicks the your link",
        "valueField": "clicks",
        "legendValueText": "[[value]]",
        "balloonText": "[[title]]: [[value]]",
        "valueAxis": "v1",

        "lineColor": "#3083c7",
        "lineAlpha": 0,
        "fillColors": "#3083c7",
        "fillAlphas": 0.8
      }, {
        "id": "g4",
        "type": "column",
        "title": "registration the your link",
        "valueField": "register",
        "balloonText": "[[title]]: [[value]]",
        "valueAxis": "v1",


        "lineColor": "#cbe2f2",
        "lineAlpha": 0,
        "fillColors": "#cbe2f2",
        "fillAlphas": 0.8
    }],
    "chartScrollbar": {
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 30,
        "autoGridCount": true,
        "backgroundColor": "#cbe2f2",
        "backgroundAlpha": 0.3,
        "selectedBackgroundColor": "#cbe2f2",
        "strokeColor": "#000",
        "selectedGraphFillAlpha": 1,
        "color": "#5e6366",
        "dragIcon": "../../../img/new/graph_trim.svg",
    },
    "categoryField": "date",
    "categoryAxis": {
        "gridColor": "#fff",  
        "parseDates": true,
        "labelsEnabled": false
    },
    "valueAxes": [{
        "gridColor": "#000",
        "dashLength": 0,
    }],
  "dataProvider": getData2()
};
var chart1 = AmCharts.makeChart("chart_1", chartOptions2),
    chart2 = AmCharts.makeChart("chart_2", chartOptions),
    chart3 = AmCharts.makeChart("chart_3", chartOptions);

var charts = {
    "chart_1" : chart1,
    "chart_2": chart2,
    "chart_3": chart3
};

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var chartIndex = $(this).data('chart');
    if(chartIndex) {
        charts[chartIndex].invalidateSize();
    }   
    
    resizePa();
});


function getData() {
    return [ {
    "date": "2012-07-27",
    "value": 13
}, {
    "date": "2012-07-28",
    "value": 11
}, {
    "date": "2012-07-29",
    "value": 15
}, {
    "date": "2012-07-30",
    "value": 16
}, {
    "date": "2012-07-31",
    "value": 18
}, {
    "date": "2012-08-01",
    "value": 13
}, {
    "date": "2012-08-02",
    "value": 22
}, {
    "date": "2012-08-03",
    "value": 23
}, {
    "date": "2012-08-04",
    "value": 20
}, {
    "date": "2012-08-05",
    "value": 17
}, {
    "date": "2012-08-06",
    "value": 16
}, {
    "date": "2012-08-07",
    "value": 18
}, {
    "date": "2012-08-08",
    "value": 21
}, {
    "date": "2012-08-09",
    "value": 26
}, {
    "date": "2012-08-10",
    "value": 24
}, {
    "date": "2012-08-11",
    "value": 29
}, {
    "date": "2012-08-12",
    "value": 32
}, {
    "date": "2012-08-13",
    "value": 18
}, {
    "date": "2012-08-14",
    "value": 24
}, {
    "date": "2012-08-15",
    "value": 22
}, {
    "date": "2012-08-16",
    "value": 18
}, {
    "date": "2012-08-17",
    "value": 19
}, {
    "date": "2012-08-18",
    "value": 14
}, {
    "date": "2012-08-19",
    "value": 15
}, {
    "date": "2012-08-20",
    "value": 12
}, {
    "date": "2012-08-21",
    "value": 8
}, {
    "date": "2012-08-22",
    "value": 9
}, {
    "date": "2012-08-23",
    "value": 8
}, {
    "date": "2012-08-24",
    "value": 7
}, {
    "date": "2012-08-25",
    "value": 5
}, {
    "date": "2012-08-26",
    "value": 11
}, {
    "date": "2012-08-27",
    "value": 13
}, {
    "date": "2012-08-28",
    "value": 18
}];

}

function getData2() {
    return [{
    "date": "2013-01-16",
    "register": 71,
    "clicks": 75
  }, {
    "date": "2013-01-17",
    "register": 74,
    "clicks": 78
  }, {
    "date": "2013-01-18",
    "register": 78,
    "clicks": 88
  }, {
    "date": "2013-01-19",
    "register": 85,
    "clicks": 89
  }, {
    "date": "2013-01-20",
    "register": 82,
    "clicks": 89
  }, {
    "date": "2013-01-21",
    "register": 83,
    "clicks": 85
  }, {
    "date": "2013-01-22",
    "register": 88,
    "clicks": 92
  }, {
    "date": "2013-01-23",
    "register": 85,
    "clicks": 90
  }, {
    "date": "2013-01-24",
    "register": 85,
    "clicks": 91
  }, {
    "date": "2013-01-25",
    "register": 80,
    "clicks": 84
  }, {
    "date": "2013-01-26",
    "register": 87,
    "clicks": 92
  }, {
    "date": "2013-01-27",
    "register": 84,
    "clicks": 87
  }, {
    "date": "2013-01-28",
    "register": 83,
    "clicks": 88
  }, {
    "date": "2013-01-29",
    "register": 84,
    "clicks": 87
  }, {
    "date": "2013-01-30",
    "register": 81,
    "clicks": 85
  }];
}


var chartData = generateChartData();

function generateChartData() {
    var chartData = [];
  var firstDate = new Date();
  firstDate.setHours( 0, 0, 0, 0 );

  for ( var i = 0; i < 100; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate(Math.floor(Math.random() * 30));
    newDate.setHours( Math.floor(Math.random() * 23), Math.floor(Math.random() * 60), 0, 0 );

    var a = Math.round( Math.random() * ( 40 + i ) ) + 100 + i;
    var b = Math.round( Math.random() * 100000000 );

    chartData.push( {
                    //   "date": newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes(),
                    "date": newDate,
                    "value": a,
                    "volume": b
                } );
    }
    return chartData;
}

chartData.sort(function(a, b){
    var aDate = new Date(a.date);
    var bDate = new Date(b.date);
    if (aDate < bDate) {
        return -1;
    } else if (aDate > bDate) {
        return 1;
    }
    return 0;
});
if(document.getElementById('amount-statistics')) {
var chart = AmCharts.makeChart( "amount-statistics", {
    "type": "stock",
    "categoryAxesSettings": {
        "minPeriod": "mm",
        "gridColor": "#fff",  
        "parseDates": true,
        "labelsEnabled": false
    },
    "valueAxesSettings": {
        "gridColor": "#000",
        "dashLength": 2,
    },
    "dataSets": [ {

        "color": "#54a4d4",

        "fieldMappings": [ {
            "fromField": "value",
            "toField": "value"
            }, {
              "fromField": "volume",
              "toField": "volume"
            }
        ],
        "dataProvider": chartData,
        "categoryField": "date"
    }],
    "panels": [ {
        "showCategoryAxis": false,
        "title": "Value",
        "percentHeight": 70,
        "stockGraphs": [ {
            "id": "g1",
            "valueField": "value",
            "type": "smoothedLine",
            "lineThickness": 2,
            "bullet": "round"
        } ],
        "stockLegend": {
          "valueTextRegular": " ",
          "markerType": "none"
        }
    }, {
        "title": "Volume",
        "percentHeight": 30,
        "stockGraphs": [ {
          "valueField": "volume",
          "type": "column",
          "cornerRadiusTop": 2,
          "fillAlphas": 1
      } ],

      "stockLegend": {
          "valueTextRegular": " ",
          "markerType": "none"
      }
    } ],

    "chartScrollbarSettings": {
        "graph": "g1",
        "position": "top",
        "graphFillAlpha": 0,
        "selectedGraphFillColor": "#347c9f",
        "autoGridCount": false,
        "backgroundColor": "#ecf6fc",
        "backgroundAlpha": 0.3,
        "selectedBackgroundColor": "#ecf6fc",
        "strokeColor": "#f00",
        "selectedGraphFillAlpha": 0,
        "color": "transparent",
        "dragIcon": "../../../img/chart_drag_stock.svg",
        
    },



    "periodSelector": {
        "position": "top",
        "dateFormat": "YYYY-MM-DD JJ:NN",
        "inputFieldWidth": 130,
        "periods": [ {
          "period": "hh",
          "count": 1,
          "label": "1 hour",
      }, {
          "period": "hh",
          "count": 2,
          "label": "2 hours"
      }, {
          "period": "hh",
          "count": 5,
          "label": "5 hour"
      }, {
          "period": "hh",
          "count": 12,
          "label": "12 hours"
      }, {
          "period": "MAX",
          "label": "MAX",
          "selected": true
      } ]
    },

} );

chart.addListener('rendered', function(event) {
  $(".amChartsPeriodSelector .amChartsInputField").datetimepicker({

    format: "YYYY-MM-DD hh:mm"
  });
});
}