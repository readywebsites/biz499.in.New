from django.contrib import admin

# Register your models here.
from .models import ContactFormEntry

admin.site.register(ContactFormEntry)