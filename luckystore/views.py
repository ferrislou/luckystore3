from django.shortcuts import render

def showLuckyStore(request):
    context = {'form': 'form 999'}
    print('*** show lucky store:', context)
    return render(request, 'templates/index.html', context)