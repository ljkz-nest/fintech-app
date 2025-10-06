from django.urls import path
from .views import MortgageListAPIView

urlpatterns = [
    path('mortgages/', MortgageListAPIView.as_view(), name='mortgage-list'),
]