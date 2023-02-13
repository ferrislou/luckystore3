from django.contrib import admin
from .models import MultiLang

# Register your models here.
class MultiLangAdmin(admin.ModelAdmin):
    list_display = ('msg_id', 'en_us', 'zh_hant', 'zh_hans')
    list_display_links = ('msg_id', 'en_us')
    search_fields = ('msg_id',)
    list_per_page = 25

admin.site.register(MultiLang, MultiLangAdmin)