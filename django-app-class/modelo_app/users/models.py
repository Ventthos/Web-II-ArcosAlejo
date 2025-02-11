from django.db import models

# Create your models here.
from django.db import models


class users(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=100)
    age = models.IntegerField(default=18)
    rfc = models.CharField(max_length=13)
    photo = models.CharField(max_length=2083)
    created_date = models.DateTimeField("date published")
    updated_date = models.DateTimeField("date updated")

    def __str__(self):
        return self.name


class user_address(models.Model):
    user_id = models.ForeignKey(users, on_delete=models.CASCADE)
    street = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=56)
    created_date = models.DateTimeField("date published")
    updated_date = models.DateTimeField("date updated")

    def __str__(self):
        return self.street