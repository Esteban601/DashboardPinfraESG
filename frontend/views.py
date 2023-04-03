from django.shortcuts import render
from django.utils.translation import gettext as _


# Create your views here.

def index(request):
    context = {
        'page': _('index')
    }
    return render(request, 'frontend/index.html', context)


def materiales(request):
    context = {
        'page': _('materiales'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/materiales.html', context)


def energia(request):
    context = {
        'page': _('energía'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/energia.html', context)


def agua_afluentes(request):
    context = {
        'page': _('agua y afluentes'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/agua_afluentes.html', context)


def emisiones(request):
    context = {
        'page': _('emisiones'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/emisiones.html', context)


def residuos(request):
    context = {
        'page': _('residuos'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/residuos.html', context)


def analisis_riesgo(request):
    context = {
        'page': _('Análisis de riesgos (climático y sistémico)'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/analisis_riesgo.html', context)


def etica_anticorrupcion(request):
    context = {
        'page': _('etica y anticorrupcion'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/etica_anticorrupcion.html', context)


def gobierno_corporativo(request):
    context = {
        'page': _('gobierno corporativo'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/gobierno_corporativo.html', context)


def productos_calidad(request):
    context = {
        'page': _('productos de calidad'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/productos_calidad.html', context)


def salud_seguridad(request):
    context = {
        'page': _('salud y seguridad de los empleados'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/salud_seguridad.html', context)


def capacitacion(request):
    context = {
        'page': _('capacitación'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/capacitacion.html', context)


def equidad_genero(request):
    context = {
        'page': _('equidad de género y diversidad'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/equidad_genero.html', context)


def relacion_clientes(request):
    context = {
        'page': _('relación con clientes y comunidades'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/relacion_clientes.html', context)


def ciberseguridad(request):
    context = {
        'page': _('ciberseguridad'),
        'section':'medio ambiente'
    }
    return render(request, 'frontend/ciberseguridad.html', context)

##################
# Económicos
##################


def ingresos(request):
    context = {
        'page': _('ingresos'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/ingresos.html', context)


def costos(request):
    context = {
        'page': _('costos'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/costos.html', context)


def operacion(request):
    context = {
        'page': _('operacion'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/operacion.html', context)


def financieros(request):
    context = {
        'page': _('financieros'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/financieros.html', context)


def impuestos_utilidad(request):
    context = {
        'page': _('impuestos_utilidad'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/impuestos_utilidad.html', context)


def dividendos_pagados(request):
    context = {
        'page': _('dividendos_pagados'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/dividendos_pagados.html', context)


def utilidad_neta(request):
    context = {
        'page': _('utilidad_neta'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/utilidad_neta.html', context)


def salario_min(request):
    context = {
        'page': _('salario_min'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/salario_min.html', context)


def obligaciones_laborales(request):
    context = {
        'page': _('obligaciones_laborales'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/obligaciones_laborales.html', context)


def inversion_proyecto(request):
    context = {
        'page': _('inversion_proyecto'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/inversion_proyecto.html', context)


def inversiones_comunitarias(request):
    context = {
        'page': _('inversiones_comunitarias'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/inversiones_comunitarias.html', context)


def ejecutivos_contratados(request):
    context = {
        'page': _('ejecutivos_contratados'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/ejecutivos_contratados.html', context)


def inversion_ausencias(request):
    context = {
        'page': _('inversion_ausencias'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/inversion_ausencias.html', context)


def inversion_prestaciones(request):
    context = {
        'page': _('inversion_prestaciones'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/inversion_prestaciones.html', context)


def invertido_iniciativas(request):
    context = {
        'page': _('invertido_iniciativas'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/invertido_iniciativas.html', context)


def perdidas_demandas(request):
    context = {
        'page': _('perdidas_demandas'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/perdidas_demandas.html', context)


def maquinaria_averiada(request):
    context = {
        'page': _('maquinaria_averiada'),
        'section': _('economicos')
    }
    return render(request, 'frontend/economicos/maquinaria_averiada.html', context)


###############
# Ambientales
##############


def consumo_energetico(request):
    context = {
        'page': _('consumo_energetico'),
        'section': _('ambientales')
    }
    return render(request, 'frontend/ambientales/consumo_energetico.html', context)


def consumo_energia_renobable(request):
    context = {
        'page': _('consumo_energia_renobable'),
        'section': _('ambientales')
    }
    return render(request, 'frontend/ambientales/consumo_energia_renobable.html', context)


def reduccion_consumo_energia(request):
    context = {
        'page': _('reduccion_consumo_energia'),
        'section': _('ambientales')
    }
    return render(request, 'frontend/ambientales/reduccion_consumo_energia.html', context)


#############################
#sociales
#############################


def empleados_funcion(request):
    context = {
        'page': _('empleados_funcion'),
        'section': _('sociales')
    }
    return render(request, 'frontend/sociales/empleados_funcion.html', context)


def empleados_sindicato(request):
    context = {
        'page': _('empleados_sindicato'),
        'section': _('sociales')
    }
    return render(request, 'frontend/sociales/empleados_sindicato.html', context)

#############################
#gobierno_corporativo
#############################


def accionistas_mayoritarios(request):
    context = {
        'page': _('accionistas_mayoritarios'),
        'section': _('gobierno_corporativo')
    }
    return render(request, 'frontend/gobierno/accionistas_mayoritarios.html', context)


def consejo_admon(request):
    context = {
        'page': _('consejo_admon'),
        'section': _('gobierno_corporativo')
    }
    return render(request, 'frontend/gobierno/consejo_admon.html', context)


def consejo_admon_independientes(request):
    context = {
        'page': _('consejo_admon_independientes'),
        'section': _('gobierno_corporativo')
    }
    return render(request, 'frontend/gobierno/consejo_admon_independientes.html', context)


def areas_direccion(request):
    context = {
        'page': _('areas_direccion'),
        'section': _('gobierno_corporativo')
    }
    return render(request, 'frontend/gobierno/areas_direccion.html', context)


def directivos_relevantes(request):
    context = {
        'page': _('directivos_relevantes'),
        'section': _('gobierno_corporativo')
    }
    return render(request, 'frontend/gobierno/directivos_relevantes.html', context)


def compensacines_personal_clave(request):
    context = {
        'page': _('compensacines_personal_clave'),
        'section': _('gobierno_corporativo')
    }
    return render(request, 'frontend/gobierno/compensacines_personal_clave.html', context)
