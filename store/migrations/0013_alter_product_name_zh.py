# Generated by Django 3.2.16 on 2023-02-21 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0012_alter_product_name_zh'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='name_zh',
            field=models.CharField(max_length=200, null=True),
        ),
    ]