from dataclasses import field
from django import forms
from django.db import models

from .models import User

class userForm(forms.ModelForm):
    class Meta:
        model = User
        fields = [
            'name',
            'age',
            'phone',
            'email',
        ]