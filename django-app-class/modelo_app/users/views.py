from django.shortcuts import render
from .models import users

# Create your views here.
def userIndex(request):
    data = {
        "users": users.objects.all()
    }
    return render(request, 'users/index.html', data)

