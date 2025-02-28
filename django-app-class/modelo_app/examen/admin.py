from django.contrib import admin

# Register your models here.
from .models import Localidad, Productos, Eventos, Tipo_Boleto, Boletos

admin.site.register(Localidad)
admin.site.register(Productos)
admin.site.register(Eventos)
admin.site.register(Tipo_Boleto)
admin.site.register(Boletos)