if (locale === 'es') {
    AmCharts.themes.iredge = {
        themeName: "iredge",

        PeriodSelector: {
            // fontFamily: "Proximanova, sans-serif",
            fromText: "Desde:",
            toText: "Hasta:",
            periodsText: "Periodo:",
        },
        DataSetSelector: {

            compareText: "Comparar con:",
            selectText: "Seleccionar:",
        },
    };
    AmCharts.monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    AmCharts.shortMonthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    AmCharts.dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    AmCharts.shortDayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
} else {
    AmCharts.themes.iredge = {
        themeName: "iredge",
        PeriodSelector: {
            // fontFamily: "Proximanova, sans-serif",
            fromText: "From:",
            toText: "To:",
        },
        ChartCursor: {
            cursorColor: "#3d4a5f",
        },
    }
}

