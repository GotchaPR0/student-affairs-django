# Generated by Django 3.2.13 on 2022-05-17 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sap', '0012_informations_studid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='informations',
            name='id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
