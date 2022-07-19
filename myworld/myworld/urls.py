from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView # new
from user.views import userView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='../templates/src/App.js'), name='login'), # new
    path('create/', userView, name="create user"),
    path('',TemplateView.as_view(template_name='index.html'), name = "index.html"),

]