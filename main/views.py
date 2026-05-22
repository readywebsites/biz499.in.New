from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST
from .models import ContactFormEntry

@require_POST
def submit_contact_form(request):
    if 'submit_modal' in request.POST:
        name = request.POST.get('name')
        phone = request.POST.get('phone', '') # Optional
        email = request.POST.get('email', '')  # Optional
        budget = request.POST.get('budget', '')  # Optional
        business_type = request.POST.get('business_type', '')  # Optional


        ContactFormEntry.objects.create(name=name, email=email, phone=phone, business_type=business_type, budget=budget)
        # Set a session variable upon successful form submission
        request.session['form_submitted'] = True
        return redirect('home')  # Redirect to a success page or home
    
    if 'submit_contact' in request.POST:
        name = request.POST.get('name')
        email = request.POST.get('email', '')  # Optional
        phone = request.POST.get('budget')
        budget = request.POST.get('budget', '')  # Optional
        business_type = request.POST.get('business_type', '')  # Optional

        ContactFormEntry.objects.create(name=name, email=email, phone=phone, business_type=business_type, budget=budget)
        # Set a session variable upon successful form submission
        request.session['form_submitted'] = True
        return redirect('home')  # Redirect to a success page or home

# Create your views here.
def index(request):
    # Check if the form was submitted and clear the session variable
    form_submitted = request.session.pop('form_submitted', False)
    return render(request, 'index.html', {'form_submitted': form_submitted,'page_title': 'Home'})




def home(request):
    return render(request, 'main.html')

def digital_marketing(request):
    return render(request, 'services/digital-marketing.html')

def ecommerce(request):
    return render(request, 'services/ecommerce.html')

def graphics(request):
    return render(request, 'services/graphics-designing.html')

def website_design(request):
    return render(request, 'services/website-design.html')

def website_development(request):
    return render(request, 'services/website-development.html')

def location(request):
    return render(request, 'location.html')

def careers(request):
    return render(request, 'careers.html')

def wedding_design(request):
    return render(request, 'services/wedding-design.html')

def wordpress_development(request):
    return render(request, 'services/wordpress-development.html')

def dentists(request):
    return render(request, 'services/dentists.html')

def startups(request):
    return render(request, 'services/startups.html')

def healthcare(request):
    return render(request, 'services/healthcare.html')

def ca(request):
    return render(request, 'services/ca.html')

def chemical(request):
    return render(request, 'services/chemical.html')

def manufacturing(request):
    return render(request, 'services/manufacturing.html')

def agency_ecommerce(request):
    return render(request, 'services/agency-ecommerce.html')

def budget_ecommerce(request):
    return render(request, 'services/budget-ecommerce.html')