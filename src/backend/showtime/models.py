# coding:utf-8
from django.db import models

# Create your models here.


class MarkTag(models.Model):
    '''书签文件夹名称，即标签名'''
    class Meta:
        db_table = 'tag'

    tag_name = models.CharField(max_length=255, unique=True)
    create_date = models.DateTimeField(auto_now_add=True)
    access_times = models.IntegerField(max_length=20, default=0)
    description = models.TextField()
    parent_id = models.ForeignKey(MarkTag)


class UrlDetail(models.Model):
    '''url具体信息'''
    class Meta:
        db_table = 'url_detail'

    tag = models.ForeignKey(MarkTag)
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=2048)
    icon = models.CharField(max_length=4096)
    create_date = models.DateTimeField(auto_now_add=True)
    access_times = models.IntegerField(max_length=20, default=0)
    description = models.TextField()
        