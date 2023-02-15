from django.shortcuts import render
from multilang.models import MultiLang

from django.core import serializers

def luckyStore(request):
    msgs = serializers.serialize("json", MultiLang.objects.all())
    context = {'products':'', 'msgs':msgs}
    print('*** got msgs for luckystore:', context)
    return render(request, 'templates/index.html', context)