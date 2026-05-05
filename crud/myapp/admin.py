from django.contrib import admin
from .models import Sport

class SportAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')

admin.site.register(Sport, SportAdmin)