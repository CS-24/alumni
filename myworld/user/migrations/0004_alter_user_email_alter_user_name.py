# Generated by Django 4.0.6 on 2022-07-26 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_alter_user_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.TextField(null=True),
        ),
    ]
