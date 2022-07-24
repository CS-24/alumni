from django.shortcuts import render

from django.shortcuts import redirect #important 
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.

def login_user(request):
    return render(request, 'authentication/login.html',{})