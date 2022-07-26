from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView # new
from user.views import userView
from user.views import front
from signup.views import signupView, front


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', TemplateView.as_view(template_name='login.html'), name='login'), # new
    path('create/', userView, name="create user"),

    path('signup/', signupView, name = "register user"),
    
    path("", front, name="frontend")
    # path('',TemplateView.as_view(template_name='index.html'), name = "index.html"),

]