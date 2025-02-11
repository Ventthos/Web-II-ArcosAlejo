from django.contrib import admin

# Register your models here.
from .models import users,user_address

admin.site.register(users)
admin.site.register(user_address)