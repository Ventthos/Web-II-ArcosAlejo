from django.urls import path

from . import views

urlpatterns = [
    path("", views.userIndex, name="indexUsers"),
    path("create", views.createUserView, name="createUserView"),
    path("createUser", views.createUser, name="createUser"),
    path("details/<int:id>", views.userDetail, name="userDetail"),
    path("updateUser", views.editUser, name="updateUser"),
    path("createUserByFetch", views.createUserByFetch, name="createUserByFetch")
]