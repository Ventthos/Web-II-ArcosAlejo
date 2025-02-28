from django.db import models

class Localidad(models.Model):
    name = models.CharField(max_length=100, null=False)
    estatus = models.BooleanField(null=False)

    def __str__(self):
        return self.name
    
class Productos(models.Model):
    name = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    localidad_id = models.ForeignKey(Localidad, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

class Eventos(models.Model):
    name = models.CharField(max_length=300, null=False)
    fecha_inicio = models.DateTimeField(null=False)
    fecha_fin = models.DateTimeField(null=False)
    localidad_id = models.ForeignKey(Localidad, null=False, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Tipo_Boleto(models.Model):
    name = models.CharField(max_length=100, null=False)
    
    def __str__(self):
        return self.name

class Boletos(models.Model):  
    precio = models.DecimalField(null=False, max_digits=10, decimal_places=2)
    tipo_boleto_id = models.ForeignKey(Tipo_Boleto, on_delete=models.CASCADE)
    evento_id = models.ForeignKey(Eventos, on_delete=models.CASCADE)
    fecha = models.DateTimeField()

    def __str__(self):
        return self.tipo_boleto_id.name

