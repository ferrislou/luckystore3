# Generated by Django 3.2.16 on 2023-02-19 05:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0008_remove_product_image_3'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='image_2',
            new_name='image2',
        ),
    ]
