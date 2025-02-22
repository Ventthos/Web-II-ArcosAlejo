import json
from django.shortcuts import render, get_object_or_404
from .models import users, user_address
from django.utils.timezone import now
from django.http import JsonResponse

# Create your views here.
def userIndex(request):
    data = {
        "users": users.objects.all()
    }
    return render(request, 'users/index.html', data)

def createUserView(request):
    return render(request, 'users/create.html')

def createUserByFetch(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    return JsonResponse({
        "NOMBRE_RECIBIDO": body.get("name")
    })

def createUser(request):
    data = {}
    try:
        if request.method == "POST":
            name = request.POST.get("name")
            email = request.POST.get("email")
            age = request.POST.get("age")
            rfc = request.POST.get("rfc")
            photo = request.POST.get("photo")

            user = users(name=name, email=email, age=age, rfc=rfc, photo=photo, created_date=now(), updated_date=now())
            user.save()
            data["user"] = user
            data["message"] = "user created"
            data["status"] = "success"
    except Exception as e:
        data["message"] = str(e)
        data["status"] = "error"

    return render(request, "users/create.html", data)        

def editUser(request):
    data = {}
    try:
        if request.method == "POST":
            id = request.POST.get("id")
            name = request.POST.get("name")
            email = request.POST.get("email")
            age = request.POST.get("age")
            rfc = request.POST.get("rfc")
            photo = request.POST.get("photo")

            user = users.objects.get(id=id)
            user.name = name
            user.email = email
            user.age = age
            user.rfc = rfc
            user.photo = photo

            user.save()
            directions = user_address.objects.filter(user_id = user)


            data["user"] = user
            data["message"] = "user edited"
            data["directions"] = directions
            data["status"] = "success"
    except Exception as e:
        data["message"] = str(e)
        data["status"] = "error"

    return render(request, "users/detail.html", data)    

def userDetail(request, id):
    user = get_object_or_404(users, id=id)
    directions = user_address.objects.filter(user_id = user)
    data = {
        "user": user,
        "directions": directions
    }
    return render(request, "users/detail.html", data)