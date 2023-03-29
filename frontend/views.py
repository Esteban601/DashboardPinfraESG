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