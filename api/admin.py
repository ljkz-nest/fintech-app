from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Mortgage, Investment

# We are telling Django to use its built-in UserAdmin for our custom User model
admin.site.register(User, UserAdmin)

admin.site.register(Mortgage)
admin.site.register(Investment)