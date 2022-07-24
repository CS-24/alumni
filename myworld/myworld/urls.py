from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from members import urls # new
from user.views import userView
from user.views import front


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', TemplateView.as_view(template_name='login.html'), name='login'), # new
    path('pages/Signup/', userView, name="frontend"),
    
    path("", front, name="frontend"),
    # path('',TemplateView.as_view(template_name='index.html'), name = "index.html")

    #members urls
    path('members/', include('members.urls')),
    path('members/', include('django.contrib.auth.urls')), #inbuilt django authentication system ig

]