//= require amCharts/amcharts
//= require amCharts/serial
//= require amCharts/amstock
//= require amCharts/themes/iredge

var divP = $('#select_grafico').val();
$('#' + divP).removeClass('d-none');


$('#select_grafico').change(function (event) {
    var id = $(this).val();
    var id_graph = $(this).val() + $('#type_grafico').val();
    $('table').addClass('d-none');
    $('table#' + id_graph).removeClass('d-none');
    var g = $('#' + id).attr('data-divG');
    // console.log(g);
    $('div#fundamentales>div[id^="g"][class!="d-none"]').addClass('d-none');
    $('#' + $(this).val()).removeClass('d-none');
    AmCharts.makeChart(g, configFundamentales[id_graph]);
});

$('#type_grafico').change(function (event) {
    var id = $('#select_grafico').val();
    var id_graph = id + $(this).val();
    $('table').addClass('d-none');
    $('table#' + id_graph).removeClass('d-none');
    var g = $('#' + id).attr('data-divG');
    $('div#fundamentales>div[id^="g"][class!="d-none"]').addClass('d-none');
    $('#' + id).removeClass('d-none');
    AmCharts.makeChart(g, configFundamentales[id_graph]);
});


/*==============================
 Chart Estado consolidado de Resultados
 ===============================*/
if (locale == "en") {
    var resultados = "Estado consolidado de resultados";
    var balance = "Balance general";
    var crecimientos = "Crecimientos financieros";
    var millones = "Cifras en billones de pesos colombianos";
} else {
    var resultados = "Estado consolidado de resultados";
    var balance = "Balance general";
    var crecimientos = "Crecimientos financieros";
    var millones = "Cifras en billones de pesos colombianos";
}

if (locale == "en") {
    var er_operacionales = "Ingresos operacionales";
    var er_construcciones = "Ingresos construcciones";
    var er_costos_gastos = "Costos y gastos";
    var er_ebitda = "EBITDA";
    var er_utilidad = "Utilidad operacional";
    var er_neta = "Utilidad neta";
} else {
    var er_operacionales = "Ingresos operacionales";
    var er_construcciones = "Ingresos construcciones";
    var er_costos_gastos = "Costos y gastos";
    var er_ebitda = "EBITDA";
    var er_utilidad = "Utilidad operacional";
    var er_neta = "Utilidad neta";
}

var chart = AmCharts.makeChart("chart_resultados", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "titles": [
        {
            "text": resultados,
            "size": 15
        },
        {
            "text": "(" + millones + ")",
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
            "balloonText": er_operacionales + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": er_operacionales,
            "type": "column",
            "valueField": "er_operacionales"
        },
        {
            "balloonText": er_construcciones + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": er_construcciones,
            "type": "column",
            "valueField": "er_construcciones"
        },
        {
            "balloonText": er_costos_gastos + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": er_costos_gastos,
            "type": "column",
            "valueField": "er_costos_gastos"
        },
        {
            "balloonText": er_ebitda + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-4",
            "lineAlpha": 0.2,
            "title": er_ebitda,
            "type": "column",
            "valueField": "er_ebitda"
        },
        {
            "balloonText": er_utilidad + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-5",
            "lineAlpha": 0.2,
            "title": er_utilidad,
            "type": "column",
            "valueField": "er_utilidad"
        },
        {
            "balloonText": er_neta + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-6",
            "lineAlpha": 0.2,
            "title": er_neta,
            "type": "column",
            "valueField": "er_neta"
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
            "er_operacionales": 594.9,
            "er_construcciones": 153.6,
            "er_costos_gastos": 372.5,
            "er_ebitda": 820.9,
            "er_utilidad": 731.9,
            "er_neta": 725.4,
        },
        {
            "year": "2017",
            "er_operacionales": 592.8,
            "er_construcciones": 62.5,
            "er_costos_gastos": 247.0,
            "er_ebitda": 775.4,
            "er_utilidad": 684.6,
            "er_neta": 648.9,
        },
        {
            "year": "2016",
            "er_operacionales": 621.5,
            "er_construcciones": 377.2,
            "er_costos_gastos": 647.9,
            "er_ebitda": 775.8,
            "er_utilidad": 691.0,
            "er_neta": 614.2,
        },

    ],
    "export": {
        "enabled": true
    }
});


/*==============================
 Chart Balance general
 ===============================*/
if (locale == "en") {
    var bg_activos = "Total de activos";
    var bg_pasivo = "Total de pasivos";
    var bg_patrimonio = "Total de patrimonio";
} else {
    var bg_activos = "Total de activos";
    var bg_pasivo = "Total de pasivos";
    var bg_patrimonio = "Total de patrimonio";
}

/*==============================
 Chart Crecimientos financieros
 ===============================*/
if (locale == "en") {
    var cf_operacionales = "Ingresos operacionales";
    var cf_construcciones = "Ingresos construcciones";
    var cf_ebitda = "EBITDA";
    var cf_utilidad = "Utilidad operacional";
    var cf_neta = "Utilidad neta";
} else {
    var cf_operacionales = "Ingresos operacionales";
    var cf_construcciones = "Ingresos construcciones";
    var cf_ebitda = "EBITDA";
    var cf_utilidad = "Utilidad operacional";
    var cf_neta = "Utilidad neta";
}


var configFundamentales = {
    g1promigas: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": resultados,
                "size": 15
            },
            {
                "text": "(" + millones + ")",
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
                "balloonText": er_operacionales + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": er_operacionales,
                "type": "column",
                "valueField": "er_operacionales"
            },
            {
                "balloonText": er_construcciones + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": er_construcciones,
                "type": "column",
                "valueField": "er_construcciones"
            },
            {
                "balloonText": er_costos_gastos + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": er_costos_gastos,
                "type": "column",
                "valueField": "er_costos_gastos"
            },
            {
                "balloonText": er_ebitda + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "lineAlpha": 0.2,
                "title": er_ebitda,
                "type": "column",
                "valueField": "er_ebitda"
            },
            {
                "balloonText": er_utilidad + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-5",
                "lineAlpha": 0.2,
                "title": er_utilidad,
                "type": "column",
                "valueField": "er_utilidad"
            },
            {
                "balloonText": er_neta + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-6",
                "lineAlpha": 0.2,
                "title": er_neta,
                "type": "column",
                "valueField": "er_neta"
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
                "er_operacionales": 594.9,
                "er_construcciones": 153.6,
                "er_costos_gastos": 372.5,
                "er_ebitda": 820.8,
                "er_utilidad": 731.9,
                "er_neta": 725.4,
            },
            {
                "year": "2017",
                "er_operacionales": 592.7,
                "er_construcciones": 62.4,
                "er_costos_gastos": 247.0,
                "er_ebitda": 775.4,
                "er_utilidad": 684.6,
                "er_neta": 648.9,
            },
            {
                "year": "2016",
                "er_operacionales": 621.5,
                "er_construcciones": 377.2,
                "er_costos_gastos": 647.9,
                "er_ebitda": 775.8,
                "er_utilidad": 691.0,
                "er_neta": 614.2,
            },

        ],
        "export": {
            "enabled": true
        }
    },
    g1subordinadas: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": resultados,
                "size": 15
            },
            {
                "text": "(" + millones + ")",
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
                "balloonText": er_operacionales + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": er_operacionales,
                "type": "column",
                "valueField": "er_operacionales"
            },
            {
                "balloonText": er_construcciones + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": er_construcciones,
                "type": "column",
                "valueField": "er_construcciones"
            },
            {
                "balloonText": er_costos_gastos + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": er_costos_gastos,
                "type": "column",
                "valueField": "er_costos_gastos"
            },
            {
                "balloonText": er_ebitda + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "lineAlpha": 0.2,
                "title": er_ebitda,
                "type": "column",
                "valueField": "er_ebitda"
            },
            {
                "balloonText": er_utilidad + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-5",
                "lineAlpha": 0.2,
                "title": er_utilidad,
                "type": "column",
                "valueField": "er_utilidad"
            },
            {
                "balloonText": er_neta + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-6",
                "lineAlpha": 0.2,
                "title": er_neta,
                "type": "column",
                "valueField": "er_neta"
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
                "er_operacionales": 3381.3,
                "er_construcciones": 346.2,
                "er_costos_gastos": 2644.0,
                "er_ebitda": 1256.1,
                "er_utilidad": 1081.0,
                "er_neta": 725.5,
            },
            {
                "year": "2017",
                "er_operacionales": 3256.7,
                "er_construcciones": 200.6,
                "er_costos_gastos": 2542.6,
                "er_ebitda": 1223.5,
                "er_utilidad": 1056.8,
                "er_neta": 645.2,
            },
            {
                "year": "2016",
                "er_operacionales": 3189.1,
                "er_construcciones": 583.0,
                "er_costos_gastos": 2958.2,
                "er_ebitda": 1091.1,
                "er_utilidad": 939.8,
                "er_neta": 616.7,
            },

        ],
        "export": {
            "enabled": true
        }
    },
    g2promigas: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": balance,
                "size": 15
            },
            {
                "text": "(" + millones + ")",
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
                "balloonText": bg_activos + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": bg_activos,
                "type": "column",
                "valueField": "bg_activos"
            },
            {
                "balloonText": bg_pasivo + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": bg_pasivo,
                "type": "column",
                "valueField": "bg_pasivo"
            },
            {
                "balloonText": bg_patrimonio + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": bg_patrimonio,
                "type": "column",
                "valueField": "bg_patrimonio"
            },
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "$",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "2018",
                "bg_activos": 6355.8,
                "bg_pasivo": 3143.0,
                "bg_patrimonio": 3212.9,
            },
            {
                "year": "2017",
                "bg_activos": 5931.5,
                "bg_pasivo": 2969.1,
                "bg_patrimonio": 2962.4,
            },
            {
                "year": "2016",
                "bg_activos": 5462.3,
                "bg_pasivo": 2711.0,
                "bg_patrimonio": 2751.2,
            }
        ],
        "export": {
            "enabled": true
        }
    },
    g2subordinadas: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": balance,
                "size": 15
            },
            {
                "text": "(" + millones + ")",
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
                "balloonText": bg_activos + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": bg_activos,
                "type": "column",
                "valueField": "bg_activos"
            },
            {
                "balloonText": bg_pasivo + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": bg_pasivo,
                "type": "column",
                "valueField": "bg_pasivo"
            },
            {
                "balloonText": bg_patrimonio + ": $[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": bg_patrimonio,
                "type": "column",
                "valueField": "bg_patrimonio"
            },
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "$",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "2018",
                "bg_activos": 10425.5,
                "bg_pasivo": 6991.6,
                "bg_patrimonio": 3433.8,
            },
            {
                "year": "2017",
                "bg_activos": 9634.7,
                "bg_pasivo": 6455.8,
                "bg_patrimonio": 3178.9,
            },
            {
                "year": "2016",
                "bg_activos": 9265.1,
                "bg_pasivo": 6310.3,
                "bg_patrimonio": 2954.8,
            }
        ],
        "export": {
            "enabled": true
        }
    },
    g3promigas: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": crecimientos,
                "size": 15
            },
            // {
            //     "text": "",
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
                "balloonText": cf_operacionales + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": cf_operacionales,
                "type": "column",
                "valueField": "cf_operacionales"
            },
            {
                "balloonText": cf_construcciones + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": cf_construcciones,
                "type": "column",
                "valueField": "cf_construcciones"
            },
            {
                "balloonText": cf_ebitda + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": cf_ebitda,
                "type": "column",
                "valueField": "cf_ebitda"
            },
            {
                "balloonText": cf_utilidad + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "lineAlpha": 0.2,
                "title": cf_utilidad,
                "type": "column",
                "valueField": "cf_utilidad"
            },
            {
                "balloonText": cf_neta + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-5",
                "lineAlpha": 0.2,
                "title": cf_neta,
                "type": "column",
                "valueField": "cf_neta"
            },
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "%",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "2018",
                "cf_operacionales": 0.4,
                "cf_construcciones": 145.8,
                "cf_ebitda": 5.9,
                "cf_utilidad": 6.9,
                "cf_neta": 11.8,
            },
            {
                "year": "2017",
                "cf_operacionales": -4.6,
                "cf_construcciones": -83.4,
                "cf_ebitda": 0.0,
                "cf_utilidad": -0.9,
                "cf_neta": 5.6,
            },
            {
                "year": "2016",
                "cf_operacionales": -9.9,
                "cf_construcciones": 951.8,
                "cf_ebitda": 18.4,
                "cf_utilidad": 18.5,
                "cf_neta": 33.0,
            }
        ],
        "export": {
            "enabled": true
        }
    },
    g3subordinadas: {
        "type": "serial",
        "theme": "light",
        "categoryField": "year",
        "rotate": false,
        "startDuration": 1,
        "titles": [
            {
                "text": crecimientos,
                "size": 15
            },
            // {
            //     "text": "",
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
                "balloonText": cf_operacionales + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": cf_operacionales,
                "type": "column",
                "valueField": "cf_operacionales"
            },
            {
                "balloonText": cf_construcciones + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": cf_construcciones,
                "type": "column",
                "valueField": "cf_construcciones"
            },
            {
                "balloonText": cf_ebitda + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "lineAlpha": 0.2,
                "title": cf_ebitda,
                "type": "column",
                "valueField": "cf_ebitda"
            },
            {
                "balloonText": cf_utilidad + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "lineAlpha": 0.2,
                "title": cf_utilidad,
                "type": "column",
                "valueField": "cf_utilidad"
            },
            {
                "balloonText": cf_neta + ": [[value]]%",
                "fillAlphas": 1,
                "id": "AmGraph-5",
                "lineAlpha": 0.2,
                "title": cf_neta,
                "type": "column",
                "valueField": "cf_neta"
            },
        ],
        "guides": [],
        "valueAxes": [
            {
                "unit": "%",
                "unitPosition": "left",
                "id": "ValueAxis-1",
                "position": "left",
                "axisAlpha": 0
            }
        ], "legend": {
            "align": "center",
            "position": "bottom",
            "right": -4,
            "color": "gray",
            "textClickEnabled": true
        },
        "allLabels": [],
        "balloon": {},
        "dataProvider": [
            {
                "year": "2018",
                "cf_operacionales": 3.8,
                "cf_construcciones": 72.5,
                "cf_ebitda": 2.7,
                "cf_utilidad": 2.3,
                "cf_neta": 12.4,
            },
            {
                "year": "2017",
                "cf_operacionales": 2.1,
                "cf_construcciones": -65.6,
                "cf_ebitda": 12.1,
                "cf_utilidad": 12.4,
                "cf_neta": 4.6,
            },
            {
                "year": "2016",
                "cf_operacionales": 20.6,
                "cf_construcciones": 0.0,
                "cf_ebitda": 8.2,
                "cf_utilidad": 8.0,
                "cf_neta": 25.0,
            }
        ],
        "export": {
            "enabled": true
        }
    },
};
