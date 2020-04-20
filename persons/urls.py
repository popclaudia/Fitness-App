from django.urls import path, include
from persons.views import orar, programari, home, sport, Logout
from rest_framework import routers
from persons import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path(r'register/', include(router.urls)),
    path('log/', include('djoser.urls.authtoken')),
    path('orar/', orar, name='orar'),
    path('sports/', sport, name='sports'),
    path('programari/', programari, name='programari'),
    path('', home, name='fitnessApp-home'),
    path(r'logout/', Logout.as_view()),
]
