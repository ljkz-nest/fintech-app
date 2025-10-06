from rest_framework import serializers
from .models import Mortgage, User, Investment
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta): # <-- The typo was here
        model = User
        fields = ('id', 'username', 'password', 'email', 'country')

class MortgageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mortgage
        fields = [
            'id',
            'country',
            'lender',
            'principal_amount',
            'interest_rate',
            'term',
            'status'
        ]

class InvestmentSerializer(serializers.ModelSerializer):
    investor = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Investment
        fields = ['id', 'investor', 'mortgage', 'amount_invested', 'investment_date']