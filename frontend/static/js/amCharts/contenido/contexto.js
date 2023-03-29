// Textos ambos idiomas

// if (locale == "es") {
var deuda = "Deuda Internacional";
var linea = "Líneas de crédito";
var certificados = "Certificados Bursátiles";
var subo = "Obligaciones Subordinadas";
// }
// else {
//     var deuda = "Foreign Debt";
//     var linea = "Credit Lines";
//     var certificados = "Debt Certificates";
//     var subo = "Subordinated Debt";
// }


var chart = AmCharts.makeChart("contexto", {
    "type": "serial",
    "theme": "none",
    "categoryField": "year",
    "rotate": true,
    "colors":["#98cd48"],
    "startDuration": 1,
    "titles": [
        {
            "text": "PIB per cápita colombiano",
            "size": 15
        },
        {
            "text": "Cifras en US$ de 2018",
            "size": 15
        }
    ],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left",
        "gridAlpha": 0
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "Income:[[income_d]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Income",
            "type": "column",
            "valueField": "income",
            "labelPosition": "inside",
            "labelText": "[[income_d]]"
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "id": "ValueAxis-1",
            "position": "top",
            "axisAlpha": 0,
            "labelsEnabled": false,
            "gridAlpha": 0
        }
    ],
    "allLabels": [],
    "balloon": {},
    "dataProvider": [
        {
            "year": 2018,
            "income": 6684,
            "income_d": "6,684",
        },
        {
            "year": 2017,
            "income": 6325,
            "income_d": "6,325",
        },
        {
            "year": 2009,
            "income": 5171,
            "income_d": "5,171",
        },
        {
            "year": 1999,
            "income": 2589,
            "income_d": "2,589",
        }
    ],
    "export": {
        "enabled": true
    }

});
