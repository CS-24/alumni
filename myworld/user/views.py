from django.shortcuts import render
from django.db import models

from .forms import userForm
from .models import User
# Create your views here.

def userView(request):
    form = userForm(request.POST or None)
    if(form.is_valid()):
        form.save()
        form = userForm()

    context = {
        'form': form
    }
    
    return render(request, "create_user.html",context)

def front(request):
    context = { }
    return render(request, "index.html", context)