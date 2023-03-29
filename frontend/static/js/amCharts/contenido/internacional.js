// if (locale == "es") {
var er_ventas = "Ventas";
var er_utilidad_bruta = "Utilidad bruta";
var er_ebitda = "UAFIDA";
var er_utilidad = "Utilidad de operación";
var er_neta = "Utilidad neta";
// } else {
//     var er_ventas = "Revenue";
//     var er_utilidad_bruta = "Gross profit";
//     var er_ebitda = "EBITDA";
//     var er_utilidad = "Operating income";
//     var er_neta = "Net income";
// }

var chart = AmCharts.makeChart("internacional1", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "",
            "size": 15
        },
        // {
        //     "text": "(" + millones + ")",
        //     "size": 12
        // }
    ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "Petróleo: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Petróleo",
            "type": "column",
            "valueField": "petroleo"
        },
        {
            "balloonText": "Carbón: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Carbón",
            "type": "column",
            "valueField": "carbon"
        },
        {
            "balloonText": "Gas natural: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": "Gas natural",
            "type": "column",
            "valueField": "gas_natural"
        },
        {
            "balloonText": "Hidroelectricidad: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-4",
            "lineAlpha": 0.2,
            "title": "Hidroelectricidad",
            "type": "column",
            "valueField": "hidroelectricidad"
        },
        {
            "balloonText": "Energía nuclear: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-5",
            "lineAlpha": 0.2,
            "title": "Energía nuclear",
            "type": "column",
            "valueField": "nuclear"
        },
        {
            "balloonText": "Renovables: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-6",
            "lineAlpha": 0.2,
            "title": "Renovables",
            "type": "column",
            "valueField": "renovables"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
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
            "year": "1999",
            "petroleo": 3657,
            "carbon": 2281,
            "gas_natural": 1984,
            "hidroelectricidad": 590,
            "nuclear": 571,
            "renovables": 45,
        },
        {
            "year": "2009",
            "petroleo": 4073,
            "carbon": 3451,
            "gas_natural": 2526,
            "hidroelectricidad": 735,
            "nuclear": 611,
            "renovables": 144,
        },
        {
            "year": "2017",
            "petroleo": 4607,
            "carbon": 3718,
            "gas_natural": 3142,
            "hidroelectricidad": 920,
            "nuclear": 597,
            "renovables": 490,
        },
        {
            "year": "2018",
            "petroleo": 4662,
            "carbon": 3772,
            "gas_natural": 3309,
            "hidroelectricidad": 949,
            "nuclear": 611,
            "renovables": 561,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("internacional2", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        // {
        //     "text": "Consumo energético mundial - Mtep",
        //     "size": 15
        // },
        // {
        //     "text": "(" + millones + ")",
        //     "size": 12
        // }
    ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "Petróleo: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Petróleo",
            "type": "column",
            "valueField": "petroleo"
        },
        {
            "balloonText": "Carbón: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Carbón",
            "type": "column",
            "valueField": "carbon"
        },
        {
            "balloonText": "Gas natural: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": "Gas natural",
            "type": "column",
            "valueField": "gas_natural"
        },
        {
            "balloonText": "Hidroelectricidad: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-4",
            "lineAlpha": 0.2,
            "title": "Hidroelectricidad",
            "type": "column",
            "valueField": "hidroelectricidad"
        },
        {
            "balloonText": "Energía nuclear: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-5",
            "lineAlpha": 0.2,
            "title": "Energía nuclear",
            "type": "column",
            "valueField": "nuclear"
        },
        {
            "balloonText": "Renovables: [[value]]%",
            "fillAlphas": 1,
            "id": "AmGraph-6",
            "lineAlpha": 0.2,
            "title": "Renovables",
            "type": "column",
            "valueField": "renovables"
        },
        {
            "balloonText": "Total: [[value]]%",
            "fillAlphas": 1,
            "id": "AmGraph-7",
            "lineAlpha": 0.2,
            "title": "Total",
            "type": "column",
            "valueField": "total"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
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
            "year": "TACC 1999-2018",
            "petroleo": 1,
            "carbon": 3,
            "gas_natural": 3,
            "hidroelectricidad": 3,
            "nuclear": 0.40,
            "renovables": 14,
            "total": 2,
        },
        {
            "year": "variación 2017-2018",
            "petroleo": 1,
            "carbon": 1,
            "gas_natural": 5,
            "hidroelectricidad": 3,
            "nuclear": 2,
            "renovables": 14,
            "total": 3,
        }
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("internacional3", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "Reservas mundiales probadas por región - 2018",
            "size": 15
        }
    ],
    "radius": "30%",
    "innerRadius": "55%",
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[percents]]%",
    "labelText": "[[percents]]%",
    "legend": {
        "align": "center",
        "position": "bottom",
        "valueText": "",
    },
    "dataProvider": [
        {
            "value": 39,
            "title": "Oriente Medio"
        },
        {
            "value": 34,
            "title": "Europa y Euroasia"
        },
        {
            "value": 9,
            "title": "Asia Pacífico"
        },
        {
            "value": 7,
            "title": "África"
        },
        {
            "value": 7,
            "title": "Norteamérica"
        },
        {
            "value": 4,
            "title": "Sur y Centroamérica"
        },
    ]
});

var chart = AmCharts.makeChart("internacional4", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "Producción de gas natural por región - 2018",
            "size": 15
        }
    ],
    "radius": "30%",
    "innerRadius": "55%",
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[percents]]%",
    "labelText": "[[percents]]%",
    "legend": {
        "align": "center",
        "position": "bottom",
        "valueText": "",
    },
    "dataProvider": [
        {
            "value": 18,
            "title": "Oriente Medio"
        },
        {
            "value": 29,
            "title": "Europa y Euroasia"
        },
        {
            "value": 16,
            "title": "Asia Pacífico"
        },
        {
            "value": 6,
            "title": "África"
        },
        {
            "value": 26,
            "title": "Norteamérica"
        },
        {
            "value": 5,
            "title": "Sur y Centroamérica"
        },
    ]
});

var chart = AmCharts.makeChart("internacional5", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "Consumo de gas natural por región - 2018",
            "size": 15
        }
    ],
    "radius": "30%",
    "innerRadius": "55%",
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[percents]]%",
    "labelText": "[[percents]]%",
    "legend": {
        "align": "center",
        "position": "bottom",
        "valueText": "",
    },
    "dataProvider": [
        {
            "value": 14,
            "title": "Oriente Medio"
        },
        {
            "value": 29,
            "title": "Europa y Euroasia"
        },
        {
            "value": 22,
            "title": "Asia Pacífico"
        },
        {
            "value": 4,
            "title": "África"
        },
        {
            "value": 27,
            "title": "Norteamérica"
        },
        {
            "value": 4,
            "title": "Sur y Centroamérica"
        },
    ]
});

var chart = AmCharts.makeChart("internacional6", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Petróleo WTI - US$/BI",
            "size": 15
        },
        // {
        //     "text": "(" + millones + ")",
        //     "size": 12
        // }
    ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "Mínimo: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Mínimo",
            "type": "column",
            "valueField": "minimo"
        },
        {
            "balloonText": "Promedio: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Promedio",
            "type": "column",
            "valueField": "promedio"
        },
        {
            "balloonText": "Máximo: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": "Máximo",
            "type": "column",
            "valueField": "maximo"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
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
            "year": "1999",
            "minimo": 11,
            "promedio": 19,
            "maximo": 28,
        },
        {
            "year": "2009",
            "minimo": 34,
            "promedio": 62,
            "maximo": 81,
        },
        {
            "year": "2017",
            "minimo": 42,
            "promedio": 51,
            "maximo": 60,
        },
        {
            "year": "2018",
            "minimo": 44,
            "promedio": 65,
            "maximo": 77,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("internacional7", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Henry Hub - US$/Mbtu",
            "size": 15
        },
        // {
        //     "text": "(" + millones + ")",
        //     "size": 12
        // }
    ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "Mínimo: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Mínimo",
            "type": "column",
            "valueField": "minimo"
        },
        {
            "balloonText": "Promedio: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Promedio",
            "type": "column",
            "valueField": "promedio"
        },
        {
            "balloonText": "Máximo: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": "Máximo",
            "type": "column",
            "valueField": "maximo"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
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
            "year": "1999",
            "minimo": 1.6,
            "promedio": 2.3,
            "maximo": 3.1,
        },
        {
            "year": "2009",
            "minimo": 1.8,
            "promedio": 3.9,
            "maximo": 6.1,
        },
        {
            "year": "2017",
            "minimo": 2.4,
            "promedio": 3.0,
            "maximo": 3.7,
        },
        {
            "year": "2018",
            "minimo": 2.5,
            "promedio": 3.1,
            "maximo": 5.5,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("internacional8", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Precio spot promedio de gas natural - US$/Mbtu",
            "size": 15
        },
        // {
        //     "text": "(" + millones + ")",
        //     "size": 12
        // }
    ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "LNG (Japan): [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "LNG (Japan)",
            "type": "column",
            "valueField": "lng"
        },
        {
            "balloonText": "Heren NBP Index (UK): [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Heren NBP Index (UK)",
            "type": "column",
            "valueField": "heren"
        },
        {
            "balloonText": "Henry Hub (US): [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": "Henry Hub (US)",
            "type": "column",
            "valueField": "henry"
        }, {
            "balloonText": "Alberta (Canadá): [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-4",
            "lineAlpha": 0.2,
            "title": "Alberta (Canadá)",
            "type": "column",
            "valueField": "alberta"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
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
            "year": "1999",
            "lng": 3.1,
            "heren": 1.6,
            "henry": 2.3,
            "alberta": 2.0,
        },
        {
            "year": "2009",
            "lng": 9.1,
            "heren": 4.9,
            "henry": 3.9,
            "alberta": 3.4,
        },
        {
            "year": "2017",
            "lng": 8.1,
            "heren": 5.8,
            "henry": 3.0,
            "alberta": 1.6,
        },
        {
            "year": "2018",
            "lng": 10.0,
            "heren": 8.1,
            "henry": 3.1,
            "alberta": 1.1,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("internacional9", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "Vehículos con GNV",
            "size": 15
        }
    ],
    "radius": "25%",
    "innerRadius": "55%",
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[percents]]%",
    "labelText": "[[percents]]%",
    "legend": {
        "align": "center",
        "position": "bottom",
        "valueText": "",
        "maxColumns": 3
    },
    "dataProvider": [
        {
            "value": 70,
            "title": "Asia Pacífico"
        },
        {
            "value": 21,
            "title": "Latinoamérica"
        },
        {
            "value": 7,
            "title": "Europa"
        },
        {
            "value": 1,
            "title": "África"
        },
        {
            "value": 1,
            "title": "Norteamérica"
        },
    ]
});

var chart = AmCharts.makeChart("internacional10", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "EDS con GNV",
            "size": 15
        }
    ],
    "radius": "25%",
    "innerRadius": "55%",
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[percents]]%",
    "labelText": "[[percents]]%",
    "legend": {
        "align": "center",
        "position": "bottom",
        "valueText": "",
        "maxColumns": 3
    },
    "dataProvider": [
        {
            "value": 60,
            "title": "Asia Pacífico"
        },
        {
            "value": 17,
            "title": "Latinoamérica"
        },
        {
            "value": 16,
            "title": "Europa"
        },
        {
            "value": 1,
            "title": "África"
        },
        {
            "value": 6,
            "title": "Norteamérica"
        },

    ]
});
