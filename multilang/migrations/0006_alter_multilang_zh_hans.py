# Generated by Django 3.2.16 on 2023-02-21 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('multilang', '0005_auto_20230221_0248'),
    ]

    operations = [
        migrations.AlterField(
            model_name='multilang',
            name='zh_hans',
            field=models.TextField(blank=True),
        ),
    ]
