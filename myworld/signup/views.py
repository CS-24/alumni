from django.shortcuts import render
from django.db import models

from .forms import userForm
from .models import User

# Create your views here.

def signupView(request):
    form = userForm(request.POST or None)
    if (form.is_valid()):
        form.save()
        form = userForm()
    
    context = {
        'form' : form
    }

    return render(request, "signup_user.html",context)