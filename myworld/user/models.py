from django.db import models

# Create your models here.
class User(models.Model):
    name = models.TextField()
    age = models.DecimalField(decimal_places=0, max_digits=3,null=True, blank=True)
    phone = models.DecimalField(decimal_places= 0, max_digits=10)
    email = models.TextField()