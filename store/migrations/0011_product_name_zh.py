# Generated by Django 3.2.16 on 2023-02-19 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0010_rename_image_1_product_image1'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='name_zh',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
