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

var chart = AmCharts.makeChart("colombia1", {
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
            "balloonText": "Otros: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-5",
            "lineAlpha": 0.2,
            "title": "Otros",
            "type": "column",
            "valueField": "otros"
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
            "petroleo": 16,
            "carbon": 4,
            "gas_natural": 3,
            "hidroelectricidad": 3,
            "otros": 7,
        },
        {
            "year": "2009",
            "petroleo": 16,
            "carbon": 7,
            "gas_natural": 4,
            "hidroelectricidad": 4,
            "otros": 10,
        },
        {
            "year": "2017",
            "petroleo": 19,
            "carbon": 8,
            "gas_natural": 6,
            "hidroelectricidad": 5,
            "otros": 7,
        },
        {
            "year": "2018",
            "petroleo": 19,
            "carbon": 8,
            "gas_natural": 6,
            "hidroelectricidad": 5,
            "otros": 8,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia2", {
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
            "balloonText": "Otros: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-5",
            "lineAlpha": 0.2,
            "title": "Otros",
            "type": "column",
            "valueField": "otros"
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
            "gas_natural": 5,
            "hidroelectricidad": 2,
            "otros": 1,
            "total": 2,
        },
        {
            "year": "variación 2017-2018",
            "petroleo": 1,
            "carbon": 5,
            "gas_natural": 13,
            "hidroelectricidad": -1,
            "otros": 8,
            "total": 4,
        }
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia3", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Pozos exploratorios",
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
            "balloonText": "Perforados: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Perforados",
            "type": "column",
            "valueField": "perforados"
        },
        {
            "balloonText": "Meta DNP: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Meta DNP",
            "type": "column",
            "valueField": "dnp"
        },
        {
            "balloonText": "Meta ANH: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": "Meta ANH",
            "type": "column",
            "valueField": "anh"
        }
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
            "year": "2017",
            "perforados": 54,
            "dnp": 50,
            "anh": 50,
        },
        {
            "year": "2018",
            "perforados": 48,
            "dnp": 60,
            "anh": 65,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia4", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Pozos exploratorios 2010-2018:745",
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
            // "balloonText": "Perforados: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            // "title": "Perforados",
            "type": "column",
            "valueField": "perforados"
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
    // "legend": {
    //     "align": "center",
    //     "position": "bottom",
    //     "right": -4,
    //
    //     "color": "gray",
    //     "textClickEnabled": true
    // },
    "balloon": {},
    "dataProvider": [
        {
            "year": "2010",
            "perforados": 112,
        },
        {
            "year": "2011",
            "perforados": 126,
        },
        {
            "year": "2012",
            "perforados": 131,
        },
        {
            "year": "2013",
            "perforados": 115,
        },
        {
            "year": "2014",
            "perforados": 113,
        },
        {
            "year": "2015",
            "perforados": 25,
        },
        {
            "year": "2016",
            "perforados": 21,
        },
        {
            "year": "2017",
            "perforados": 54,
        },
        {
            "year": "2018",
            "perforados": 48,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia5", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Inversión en contratos de",
            "size": 15
        },
        {
            "text": "E&P y TEA'S - US$MM",
            "size": 15
        }
    ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            // "balloonText": "Perforados: [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            // "title": "Perforados",
            "type": "column",
            "valueField": "perforados"
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
    // "legend": {
    //     "align": "center",
    //     "position": "bottom",
    //     "right": -4,
    //
    //     "color": "gray",
    //     "textClickEnabled": true
    // },
    "balloon": {},
    "dataProvider": [
        {
            "year": "2009",
            "perforados": 966,
        },
        {
            "year": "2014",
            "perforados": 452.9,
        },
        {
            "year": "2015",
            "perforados": 318.1,
        },
        {
            "year": "2016",
            "perforados": 328.4,
        },
        {
            "year": "2017",
            "perforados": 576.1,
        },
        {
            "year": "2018",
            "perforados": 112.9,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia6", {
    "type": "pie",
    "titleField": "titulo",
    "valueField": "value",
    "titles": [
        {
            "text": "Reservas probadas de gas natural - 2018",
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
    "dataProvider": [
        {
            "value": 59
        },
        {
            "value": 16
        },
        {
            "value": 8
        },
        {
            "value": 5
        },
        {
            "value": 4
        },
        {
            "value": 4
        },
        {
            "value": 4
        },
    ]
});

var chart = AmCharts.makeChart("colombia7", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "Departamento",
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
            "value": 72,
            "title": "Casanare"
        },
        {
            "value": 10,
            "title": "La Guiajira"
        },
        {
            "value": 4,
            "title": "Sucre"
        },
        {
            "value": 4,
            "title": "Santander"
        },
        {
            "value": 2,
            "title": "Córdoba"
        },
        {
            "value": 8,
            "title": "Otros departamentos"
        },

    ]
});

var chart = AmCharts.makeChart("colombia8", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "Campo",
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
            "value": 31,
            "title": "Cupiagua"
        },
        {
            "value": 26,
            "title": "Pauta - Floreña"
        },
        {
            "value": 14,
            "title": "Cusiana"
        },
        {
            "value": 10,
            "title": "Chuchupa - Ballena"
        },
        {
            "value": 19,
            "title": "Otros Campos"
        },
    ]
});

var chart = AmCharts.makeChart("colombia9", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": "Suministro de gas natural - 2018",
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
            "value": 56,
            "title": "Llanos Orientales"
        },
        {
            "value": 19,
            "title": "La Guijira"
        },
        {
            "value": 25,
            "title": "Otros"
        },
    ]
});

var chart = AmCharts.makeChart("colombia10", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Usuarios de gas natural por regiones",
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
            "balloonText": "1999:1,898,908 - [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "1999:1,898,908",
            "type": "column",
            "valueField": "perforados"
        },
        {
            "balloonText": "2018:9,497,803 - [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "2018:9,497,803",
            "type": "column",
            "valueField": "dnp"
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
            "year": "Andina",
            "perforados": 1078875,
            "dnp": 5920923,
        },
        {
            "year": "Caribe",
            "perforados": 681819,
            "dnp": 1928968,
        },
        {
            "year": "Pacifica",
            "perforados": 67385,
            "dnp": 1269986,
        },
        {
            "year": "Orinoquía y Amazonía",
            "perforados": 70829,
            "dnp": 377926,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia11", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Cobertura efectiva",
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
            "balloonText": "1999:35% - [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "1999:35%",
            "type": "column",
            "valueField": "perforados"
        },
        {
            "balloonText": "2018:81% - [[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "2018:81%",
            "type": "column",
            "valueField": "dnp"
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
            "year": "Andina",
            "perforados": 31,
            "dnp": 81,
        },
        {
            "year": "Caribe",
            "perforados": 71,
            "dnp": 87,
        },
        {
            "year": "Pacifica",
            "perforados": 11,
            "dnp": 76,
        },
        {
            "year": "Orinoquía y Amazonía",
            "perforados": 60,
            "dnp": 72,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia12", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Vehículos convertidos a GNV",
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
            "balloonText": "[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "1999:1,898,908",
            "type": "column",
            "valueField": "perforados"
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
    // "legend": {
    //     "align": "center",
    //     "position": "bottom",
    //     "right": -4,
    //
    //     "color": "gray",
    //     "textClickEnabled": true
    // },
    "balloon": {},
    "dataProvider": [
        {
            "year": "1999",
            "perforados": 5276,
        },
        {
            "year": "2009",
            "perforados": 302365,
        },
        {
            "year": "2017",
            "perforados": 568264,
        },
        {
            "year": "2018",
            "perforados": 583688,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia13", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Estaciones de servicio GNV",
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
            "id": "g1",
            "balloonText": "[[value]]",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#02B4CE",
            "hideBulletsCount": 50,
            "title": "red line",
            "valueField": "perforados",
            "useLineColorForBulletBorder": true,
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
    // "legend": {
    //     "align": "center",
    //     "position": "bottom",
    //     "right": -4,
    //
    //     "color": "gray",
    //     "textClickEnabled": true
    // },
    "balloon": {},
    "dataProvider": [
        {
            "year": "1999",
            "perforados": 22,
        },
        {
            "year": "2009",
            "perforados": 605,
        },
        {
            "year": "2017",
            "perforados": 813,
        },
        {
            "year": "2018",
            "perforados": 808,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia14", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "ION y Margen ION",
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
            "balloonText": "[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Ingreso Operativo Neto",
            "type": "column",
            "valueField": "perforados"
        },
        {
            "id": "AmGraph-2",
            "balloonText": "[[value]]",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#ffffff",
            "hideBulletsCount": 50,
            "title": "Margen ION",
            "valueField": "otro",
            "useLineColorForBulletBorder": true,
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
            "year": "4T18",
            "perforados": 5276,
            "otro": 5276,
        },
        {
            "year": "1T19",
            "perforados": 302365,
            "otro": 5276,
        },
        {
            "year": "2T19",
            "perforados": 568264,
            "otro": 5276,
        },
        {
            "year": "3T19",
            "perforados": 583688,
            "otro": 5276,
        },
    ],
    "export": {
        "enabled": true
    }
});

var chart = AmCharts.makeChart("colombia15", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": "Consumo de GNV",
            "size": 15
        },
        {
            "text": "Gpcd",
            "size": 12
        }
    ],
    "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "1999:1,898,908",
            "type": "column",
            "valueField": "perforados"
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
    // "legend": {
    //     "align": "center",
    //     "position": "bottom",
    //     "right": -4,
    //
    //     "color": "gray",
    //     "textClickEnabled": true
    // },
    "balloon": {},
    "dataProvider": [
        {
            "year": "1999",
            "perforados": 6,
        },
        {
            "year": "2009",
            "perforados": 74,
        },
        {
            "year": "2017",
            "perforados": 59,
        },
        {
            "year": "2018",
            "perforados": 53,
        },
    ],
    "export": {
        "enabled": true
    }
});

// var chart = AmCharts.makeChart("colombia16", {
//     "type": "serial",
//     "theme": "light",
//     "categoryField": "year",
//     "rotate": false,
//     "startDuration": 1,
//     "titles": [
//         {
//             "text": "Precios de GNV a usuarios final ($/m3)",
//             "size": 15
//         },
//         // {
//         //     "text": "(" + millones + ")",
//         //     "size": 12
//         // }
//     ],
//     "colors": ["#02B4CE", "#DDDDDD", "#005C63", "#898989", "#3ACBCE", "#353535", "#67CE98", "#0E6839", "#00365E", "#1275B2"],
//     "categoryAxis": {
//         "gridPosition": "start",
//         "position": "left"
//     },
//     "trendLines": [],
//     "graphs": [
//         {
//             "balloonText": "Barranquilla: [[value]]",
//             "fillAlphas": 1,
//             "id": "AmGraph-1",
//             "lineAlpha": 0.2,
//             "title": "Barranquilla",
//             "type": "column",
//             "valueField": "Barranquilla"
//         },
//         {
//             "balloonText": ": [[value]]",
//             "fillAlphas": 1,
//             "id": "AmGraph-2",
//             "lineAlpha": 0.2,
//             "title": "Bogotá",
//             "type": "column",
//             "valueField": "Bogota"
//         },
//         {
//             "balloonText": "Cali: [[value]]",
//             "fillAlphas": 1,
//             "id": "AmGraph-3",
//             "lineAlpha": 0.2,
//             "title": "Cali",
//             "type": "column",
//             "valueField": "Cali"
//         },
//         {
//             "balloonText": "Medellín: [[value]]",
//             "fillAlphas": 1,
//             "id": "AmGraph-4",
//             "lineAlpha": 0.2,
//             "title": "Medellín",
//             "type": "column",
//             "valueField": "Promedio"
//         },
//         {
//             "balloonText": "Promedio: [[value]]",
//             "fillAlphas": 1,
//             "id": "AmGraph-5",
//             "lineAlpha": 0.2,
//             "title": "Promedio",
//             "type": "column",
//             "valueField": "Promedio"
//         },
//     ],
//     "guides": [],
//     "valueAxes": [
//         {
//             // "unit": "$",
//             "unitPosition": "left",
//             "autoGridCount": false,
//             "gridCount": 12,
//             "position": "left",
//             "axisAlpha": 0,
//         }
//     ],
//     "legend": {
//         "align": "center",
//         "position": "bottom",
//         "right": -4,
//
//         "color": "gray",
//         "textClickEnabled": true
//     },
//     "balloon": {},
//     "dataProvider": [
//         {
//             "year": "1999",
//             "Barranquilla": 414,
//             "Bogota": 473,
//             "Cali": 0,
//             "Medellin": 0,
//             "Promedio": 444,
//         },
//         {
//             "year": "2009",
//             "Barranquilla": 1414,
//             "Bogota": 1425,
//             "Cali": 1426,
//             "Medellin": 1291,
//             "Promedio": 1389,
//         },
//         {
//             "year": "2017",
//             "Barranquilla": 1399,
//             "Bogota": 1599,
//             "Cali": 1598,
//             "Medellin": 1449,
//             "Promedio": 1511,
//         },
//         {
//             "year": "2018",
//             "Barranquilla": 1343,
//             "Bogota": 1475,
//             "Cali": 1644,
//             "Medellin": 1506,
//             "Promedio": 1492,
//         },
//     ],
//     "export": {
//         "enabled": true
//     }
// });
