from django.shortcuts import render

# Create your views here.

def index(request):
    context = { 'page':'index'}
    return render(request, 'frontend/index.html', context)


def materiales(request):
    context = {
        'page':'materiales',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/materiales.html', context)


def energia(request):
    context = {
        'page':'energía',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/energia.html', context)


def agua_afluentes(request):
    context = {
        'page':'agua y afluentes',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/agua_afluentes.html', context)


def emisiones(request):
    context = {
        'page':'emisiones',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/emisiones.html', context)


def residuos(request):
    context = {
        'page':'residuos',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/residuos.html', context)


def analisis_riesgo(request):
    context = {
        'page':'Análisis de riesgos (climático y sistémico)',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/analisis_riesgo.html', context)


def etica_anticorrupcion(request):
    context = {
        'page':'etica y anticorrupcion',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/etica_anticorrupcion.html', context)


def gobierno_corporativo(request):
    context = {
        'page':'gobierno corporativo',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/gobierno_corporativo.html', context)


def productos_calidad(request):
    context = {
        'page':'productos de calidad',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/productos_calidad.html', context)


def salud_seguridad(request):
    context = {
        'page':'salud y seguridad de los empleados',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/salud_seguridad.html', context)


def capacitacion(request):
    context = {
        'page':'capacitación',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/capacitacion.html', context)


def equidad_genero(request):
    context = {
        'page':'equidad de género y diversidad',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/equidad_genero.html', context)


def relacion_clientes(request):
    context = {
        'page':'relación con clientes y comunidades',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/relacion_clientes.html', context)


def ciberseguridad(request):
    context = {
        'page':'ciberseguridad',
        'section':'medio ambiente'
    }
    return render(request, 'frontend/ciberseguridad.html', context)

##################
# Económicos
##################


def ingresos(request):
    context = {
        'page':'ingresos',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/ingresos.html', context)


def costos(request):
    context = {
        'page':'costos',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/costos.html', context)


def operacion(request):
    context = {
        'page':'operacion',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/operacion.html', context)


def financieros(request):
    context = {
        'page':'financieros',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/financieros.html', context)


def impuestos_utilidad(request):
    context = {
        'page':'impuestos_utilidad',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/impuestos_utilidad.html', context)


def dividendos_pagados(request):
    context = {
        'page':'dividendos_pagados',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/dividendos_pagados.html', context)


def utilidad_neta(request):
    context = {
        'page':'utilidad_neta',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/utilidad_neta.html', context)


def salario_min(request):
    context = {
        'page':'salario_min',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/salario_min.html', context)


def obligaciones_laborales(request):
    context = {
        'page':'obligaciones_laborales',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/obligaciones_laborales.html', context)


def inversion_proyecto(request):
    context = {
        'page':'inversion_proyecto',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/inversion_proyecto.html', context)


def inversiones_comunitarias(request):
    context = {
        'page':'inversiones_comunitarias',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/inversiones_comunitarias.html', context)


def ejecutivos_contratados(request):
    context = {
        'page':'ejecutivos_contratados',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/ejecutivos_contratados.html', context)


def inversion_ausencias(request):
    context = {
        'page':'inversion_ausencias',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/inversion_ausencias.html', context)


def inversion_prestaciones(request):
    context = {
        'page':'inversion_prestaciones',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/inversion_prestaciones.html', context)


def invertido_iniciativas(request):
    context = {
        'page':'invertido_iniciativas',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/invertido_iniciativas.html', context)


def perdidas_demandas(request):
    context = {
        'page':'perdidas_demandas',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/perdidas_demandas.html', context)


def maquinaria_averiada(request):
    context = {
        'page':'maquinaria_averiada',
        'section':'economicos'
    }
    return render(request, 'frontend/economicos/maquinaria_averiada.html', context)


###############
# Ambientales
##############


def consumo_energetico(request):
    context = {
        'page':'consumo_energetico',
        'section':'economicos'
    }
    return render(request, 'frontend/ambientales/consumo_energetico.html', context)


def consumo_energia_renobable(request):
    context = {
        'page':'consumo_energia_renobable',
        'section':'economicos'
    }
    return render(request, 'frontend/ambientales/consumo_energia_renobable.html', context)