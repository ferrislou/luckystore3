from django.db import models

# Create your models here.

class MultiLang(models.Model):
    msg_id = models.CharField(max_length=100, unique=True, default='')
    en_us = models.TextField(null=True)
    zh_hant = models.TextField(null=True)
    zh_hans = models.TextField(null=True)

