var chart = AmCharts.makeChart("chart_dividendos", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    // "titles": [
    //     {
    //         "text": resultados,
    //         "size": 15
    //     },
    //     {
    //         "text": "(" + millones + ")",
    //         "size": 12
    //     }
    // ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "Dividendo ordinario" + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Dividendo ordinario",
            "type": "column",
            "valueField": "ordinario"
        },
        {
            "balloonText": "Dividendo extraordinario" + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Dividendo extraordinario",
            "type": "column",
            "valueField": "extraordinario"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            "unit": "$",
            "unitPosition": "left",
            "autoGridCount": false,
            "gridCount": 12,
            "position": "left",
            "axisAlpha": 0,
        }
    ],
    "legend": {
        "align": "center",
        "position": "bottom",
        "right": -4,

        "color": "gray",
        "textClickEnabled": true
    },
    "balloon": {},
    "dataProvider": [
        {
            "year": "2018",
            "ordinario": 594.9,
            "extraordinario": 153.6,
        },


    ],
    "export": {
        "enabled": true
    }
});