# Generated by Django 3.2.16 on 2023-02-19 05:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_rename_image_2_product_image2'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='image_1',
            new_name='image1',
        ),
    ]