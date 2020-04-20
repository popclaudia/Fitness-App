from .models import Sport, User
from django.http import HttpResponse
from .serializers import SportSerializer, UserSerializer,  UserCreateSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets
from rest_framework import status
from rest_framework.views import APIView


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserCreateSerializer
    #authentication_classes = (IsAuthenticated,)
    #permission_classes = (TokenAuthentication,)


class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

def home(request):
    # template = loader.get_template('persons/home.html')
    return HttpResponse("Home page")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def sport(request, *args, **kwargs):
    queryset = Sport.objects.all()
    serializer = SportSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def orar(request, *args, **kwargs):
    print(request.user);
    queryset = Sport.objects.all()
    serializer = SportSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def programari(request, *args, **kwargs):
    print(request.user);
    user_id = request.user.id
    queryset = User.objects.filter(pk=user_id)
    serializer = UserSerializer(queryset, many=True)
    return Response(serializer.data)
