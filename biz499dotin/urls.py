from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from main import views

urlpatterns = [

    # Admin
    path('admin/', admin.site.urls),

    # Home
    path('', views.home, name='home'),

    # Location
    path('location/', views.location, name='location'),

    # Careers
    path('careers/', views.careers, name='careers'),

    # Services
    path('services/website-design/', views.website_design, name='website_design'),

    path('services/website-development/', views.website_development, name='website_development'),

    path('services/digital-marketing/', views.digital_marketing, name='digital_marketing'),

    path('services/ecommerce/', views.ecommerce, name='ecommerce'),

    path('services/graphics-designing/', views.graphics, name='graphics_designing'),

    path('services/wedding-design/', views.wedding_design, name='wedding_design'),

    path('services/wordpress-development/', views.wordpress_development, name='wordpress_development'),

    path('services/dentists/', views.dentists, name='dentists'),

    path('services/startups/', views.startups, name='startups'),

    path('services/healthcare/', views.healthcare, name='healthcare'),

    path('services/ca/', views.ca, name='ca'),

    path('services/chemical/', views.chemical, name='chemical'),

    path('services/manufacturing/', views.manufacturing, name='manufacturing'),

    path('services/agency-ecommerce/', views.agency_ecommerce, name='agency_ecommerce'),

    path('services/budget-ecommerce/', views.budget_ecommerce, name='budget_ecommerce'),

]

# Static & Media Files
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)