from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Sport
from .serializers import SportSerializer

# GET all sports
@api_view(['GET'])
def sport_list(request):
    sports = Sport.objects.all()
    serializer = SportSerializer(sports, many=True)
    return Response(serializer.data)


# POST create sport
@api_view(['POST'])
def sport_create(request):
    serializer = SportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['PUT'])
def sport_update(request, pk):
    sport = Sport.objects.get(id=pk)
    serializer = SportSerializer(sport, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors)



@api_view(['DELETE'])
def sport_delete(request, pk):
    sport = Sport.objects.get(id=pk)
    sport.delete()
    return Response({"message": "Deleted successfully"})