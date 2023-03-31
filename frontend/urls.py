from django.urls import path

from . import views

urlpatterns = [
        # path('', views.index, name='index'),
        path('', views.ingresos, name='ingresos'),
        path('materiales', views.materiales, name='materiales'),
        path('energia', views.energia, name='energia'),
        path('agua-afluentes', views.agua_afluentes, name='agua_afluentes'),
        path('emisiones', views.emisiones, name='emisiones'),
        path('residuos', views.residuos, name='residuos'),
        path('etica_anticorrupcion', views.etica_anticorrupcion, name='etica_anticorrupcion'),
        path('gobierno_corporativo', views.gobierno_corporativo, name='gobierno_corporativo'),
        path('analisis_riesgo', views.analisis_riesgo, name='analisis_riesgo'),
        path('productos_calidad', views.productos_calidad, name='productos_calidad'),
        path('salud_seguridad', views.salud_seguridad, name='salud_seguridad'),
        path('capacitacion', views.capacitacion, name='capacitacion'),
        path('equidad_genero', views.equidad_genero, name='equidad_genero'),
        path('relacion_clientes', views.relacion_clientes, name='relacion_clientes'),
        path('ciberseguridad', views.ciberseguridad, name='ciberseguridad'),

        path('ingresos', views.ingresos, name='ingresos'),
        path('costos', views.costos, name='costos'),
        path('operacion', views.operacion, name='operacion'),
        path('financieros', views.financieros, name='financieros'),
        path('impuestos_utilidad', views.impuestos_utilidad, name='impuestos_utilidad'),
        path('dividendos_pagados', views.dividendos_pagados, name='dividendos_pagados'),
        path('utilidad_neta', views.utilidad_neta, name='utilidad_neta'),
        path('salario_min', views.salario_min, name='salario_min'),
        path('obligaciones_laborales', views.obligaciones_laborales, name='obligaciones_laborales'),
        path('inversion_proyecto', views.inversion_proyecto, name='inversion_proyecto'),
        path('inversiones_comunitarias', views.inversiones_comunitarias, name='inversiones_comunitarias'),
        path('ejecutivos_contratados', views.ejecutivos_contratados, name='ejecutivos_contratados'),
        path('inversion_ausencias', views.inversion_ausencias, name='inversion_ausencias'),
        path('inversion_prestaciones', views.inversion_prestaciones, name='inversion_prestaciones'),
        path('invertido_iniciativas', views.invertido_iniciativas, name='invertido_iniciativas'),
        path('perdidas_demandas', views.perdidas_demandas, name='perdidas_demandas'),
        path('maquinaria_averiada', views.maquinaria_averiada, name='maquinaria_averiada'),

        path('consumo_energetico', views.consumo_energetico, name='consumo_energetico'),
        path('consumo_energia_renobable', views.consumo_energia_renobable, name='consumo_energia_renobable'),
        path('reduccion_consumo_energia', views.reduccion_consumo_energia, name='reduccion_consumo_energia'),

        path('empleados_funcion', views.empleados_funcion, name='empleados_funcion'),
        path('empleados_sindicato', views.empleados_sindicato, name='empleados_sindicato'),

        path('accionistas_mayoritarios', views.accionistas_mayoritarios, name='accionistas_mayoritarios'),
        path('consejo_admon', views.consejo_admon, name='consejo_admon'),
        path('consejo_admon_independientes', views.consejo_admon_independientes, name='consejo_admon_independientes'),
        path('areas_direccion', views.areas_direccion, name='areas_direccion'),
        path('directivos_relevantes', views.directivos_relevantes, name='directivos_relevantes'),
        path('compensacines_personal_clave', views.compensacines_personal_clave, name='compensacines_personal_clave'),


        path('', views.index, name='aviso-privacidad'),
        path('', views.index, name='search'),
        path('', views.index, name='economia')
    ]