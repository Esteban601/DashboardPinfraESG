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


var chart = AmCharts.makeChart("perfil_deuda", {
    "type": "pie",
    "titleField": "titulo",
    "valueField": "value",
    "titles": [],
    "radius": "25%",
    "innerRadius": "45%",
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "$[[value]] - [[percents]]%",
    "labelText": "[[percents]]%",
    "dataProvider": [
        {
            "value": 50
        },
        {
            "value": 5
        },
        {
            "value": 14
        },
        {
            "value": 0
        },
        {
            "value": 10
        },
        {
            "value": 21
        },
    ]
});
