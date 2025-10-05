from rest_framework import generics
from .models import Mortgage
from .serializers import MortgageSerializer

class MortgageListAPIView(generics.ListAPIView):
    """
    API view to retrieve a list of all mortgages.
    """
    queryset = Mortgage.objects.filter(status='AVAILABLE')
    serializer_class = MortgageSerializer