from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from .models import *


class UserCreateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'phone', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True, }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class SportSerializer(serializers.ModelSerializer):
    schedule = serializers.StringRelatedField(many=True)

    class Meta:
        model = Sport
        fields = ('tip', 'nrMaxPersoane', 'schedule')


class UserSerializer(serializers.ModelSerializer):
    programari = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = ('username', 'programari')

