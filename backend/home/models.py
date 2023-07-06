from django.conf import settings
from django.db import models
class Ssf(models.Model):
    'Generated Model'
    vnvnfn = models.BigIntegerField()
    errr = models.BigIntegerField()
    rel_user_1_1 = models.OneToOneField("users.User",blank=True,null=True,on_delete=models.CASCADE,related_name="ssf_rel_user_1_1",)
