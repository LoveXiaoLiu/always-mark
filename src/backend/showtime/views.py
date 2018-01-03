# coding:utf-8

import re
import collections  # python 有序字典
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view, renderer_classes

from utils import get_md5
from mark.settings import config
from showtime.models import MarkTag, UrlDetail

@api_view(['GET'])
@renderer_classes((JSONRenderer, ))
def get_tags(request):
    result = list()
    root_dict = collections.OrderedDict()

    r_querys = MarkTag.objects.filter(parent_id__isnull=True).values_list('tag_name', flat=True).order_by("-access_times")

    for i in r_querys:root_dict[i] = []

    n_querys = MarkTag.objects.filter(parent_id__isnull=False)

    for q in n_querys:root_dict[q.parent.tag_name].append(q.tag_name)

    for k, v in root_dict.items():
        result.append({
            "value" : k,
            "son"   : v
        })

    ret = {'status': 2000, 'result': result, 'message': 'success'}
    return Response(ret)

@api_view(['GET'])
@renderer_classes((JSONRenderer, ))
def get_all_tags(request):
    result = list()

    querys = MarkTag.objects.all().values_list('tag_name', flat=True).order_by("-access_times")

    result = querys

    ret = {'status': 2000, 'result': result, 'message': 'success'}
    return Response(ret)

@api_view(['GET'])
@renderer_classes((JSONRenderer, ))
def get_urls(request, tag_name):
    result = {}

    try:
        tq_obj = MarkTag.objects.get(tag_name=tag_name)
        uq_obj = UrlDetail.objects.filter(tag=tq_obj).values()

        result[tag_name] = uq_obj

    except Exception, e:
        print "except reson", e

    ret = {'status': 2000, 'result': result, 'message': 'success'}
    return Response(ret)

@api_view(['POST'])
@renderer_classes((JSONRenderer, ))
def add_mark(request):
    status = 6003
    req = request.DATA
    message = 'params error!'

    tag = req.get('tag')
    name = req.get('name')
    href = req.get('href')
    icon = req.get('icon', '0')
    pwd = req.get('pwd')

    if config['OP_PWD'] != get_md5(pwd):
        status = 5001
        message = 'password error!'
        return Response({'status': status, 'result': {}, 'message': message})

    if tag and name and href and pwd:
        try:
            obj, created = MarkTag.objects.get_or_create(tag_name=tag)

            u_obj = UrlDetail(tag=obj, name=name, url=href, icon=icon)
            u_obj.save()
            status = 2000
            message = 'success'
        except Exception, e:
            print "except reson", e
        
    ret = {'status': status, 'result': {}, 'message': message}
    return Response(ret)

@api_view(['GET'])
@renderer_classes((JSONRenderer, ))
def search_url(request, sah_str):
    status = 6003
    message = 'unknow error!'
    result = {}

    regex = re.compile('\s+')

    try:
        s_list = regex.split(sah_str)
        u_q = UrlDetail.objects.all()
        for s in s_list:
            u_q = u_q.filter(name__icontains=s)

        result["searchList"] = u_q.values()

        status = 2000
        message = 'success!'

    except Exception, e:
        print "except reson", e

    ret = {"status":status, "result":result, 'message':message}
    return Response(ret)

@api_view(['POST', 'DELETE'])
@renderer_classes((JSONRenderer, ))
def marks(request):
    print request.Method
    print request.DATA