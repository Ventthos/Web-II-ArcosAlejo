from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("eventos", views.eventosPage, name="eventos"),
    path("boletos", views.boletosPage, name="boletos")
]