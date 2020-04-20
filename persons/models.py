from __future__ import unicode_literals
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone


class User(AbstractUser):
    email = models.EmailField(verbose_name='email', max_length=255, unique=True)
    phone = models.CharField(null=True, max_length=10)
    REQUIRED_FIELDS = ['email', 'phone', 'first_name', 'last_name']
    USERNAME_FIELD = 'username'

    def get_username(self):
        return self.username


class Sport(models.Model):
    tip = models.CharField(max_length=30)
    nrMaxPersoane = models.IntegerField(default=0)

    def __str__(self):
        return '%s %s' % (self.tip, self.nrMaxPersoane)


class Orar(models.Model):
    data = models.DateTimeField(default=timezone.now)
    ziua = models.CharField(max_length=10)
    idSport = models.ForeignKey(Sport, related_name='schedule', on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' % (self.ziua, self.data.hour)


class Programare(models.Model):
    client = models.ForeignKey(User, related_name='programari', on_delete=models.CASCADE)
    idOrar = models.ForeignKey(Orar, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s %s ' % (self.idOrar.ziua, self.idOrar.data.hour, self.idOrar.idSport.tip)
