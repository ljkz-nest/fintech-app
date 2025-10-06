from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
import decimal

# It's best practice to use a custom user model from the start
class User(AbstractUser):
    """
    Custom user model for investors. Extends Django's built-in User.
    """
    country = models.CharField(max_length=100)
    # You can add other investor-specific fields here later

class Mortgage(models.Model):
    """
    Represents a mortgage opportunity that investors can fund.
    """
    STATUS_CHOICES = [
        ('AVAILABLE', 'Available for funding'),
        ('FUNDED', 'Fully funded'),
        ('ACTIVE', 'Active and performing'),
        ('COMPLETED', 'Completed'),
    ]

    country = models.CharField(max_length=100)
    lender = models.CharField(max_length=200, help_text="The originating financial institution")
    principal_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        validators=[MinValueValidator(decimal.Decimal('0.01'))]
    )
    interest_rate = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        help_text="Annual interest rate in percentage (e.g., 5.5)"
    )
    term = models.IntegerField(help_text="Loan term in months")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='AVAILABLE')
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mortgage of {self.principal_amount} in {self.country}"

class Investment(models.Model):
    """
    Links an investor (User) to a Mortgage they have invested in.
    """
    investor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='investments')
    mortgage = models.ForeignKey(Mortgage, on_delete=models.CASCADE, related_name='investments')
    amount_invested = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        validators=[MinValueValidator(decimal.Decimal('0.01'))]
    )
    investment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.investor.username} invested {self.amount_invested} in {self.mortgage.id}"