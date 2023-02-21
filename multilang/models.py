from django.db import models

# Create your models here.

class MultiLang(models.Model):
    msg_id = models.CharField(max_length=100, unique=True, default='')
    en_us = models.TextField(blank=False, default='')
    zh_hant = models.TextField(blank=True)
    zh_hans = models.TextField(blank=True)

