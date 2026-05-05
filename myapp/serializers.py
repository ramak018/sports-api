from rest_framework import serializers
from .models import Sport

class SportSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = Sport
        fields = '__all__'