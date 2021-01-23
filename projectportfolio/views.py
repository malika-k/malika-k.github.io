from django.shortcuts import render

def index(request):
    context = {
        "home_page": "home"
    }
    return render(request, "about.html", context)
