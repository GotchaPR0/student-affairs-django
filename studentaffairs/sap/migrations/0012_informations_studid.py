# Generated by Django 3.2.13 on 2022-05-17 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sap', '0011_rename_departement_informations_department'),
    ]

    operations = [
        migrations.AddField(
            model_name='informations',
            name='studID',
            field=models.CharField(default='', max_length=500),
        ),
    ]
