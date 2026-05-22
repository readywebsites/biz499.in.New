from django.db import models

class ContactFormEntry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20,blank=True, null=True)
    business_type = models.TextField(blank=True, null=True) 
    budget = models.CharField(max_length=20,blank=True, null=True) 

    def __str__(self):
        return self.name
