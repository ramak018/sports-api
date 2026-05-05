from django.db import models

class Sport(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    players=models.CharField(max_length=50)
    image = models.ImageField(upload_to='sports/', null=True, blank=True)

    def __str__(self):
        return self.name