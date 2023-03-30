from django.urls import path

from . import views

urlpatterns = [
        # path('', views.index, name='index'),
        path('', views.materiales, name='materiales'),
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


        path('', views.index, name='aviso-privacidad'),
        path('', views.index, name='search'),
        path('', views.index, name='economia')
    ]