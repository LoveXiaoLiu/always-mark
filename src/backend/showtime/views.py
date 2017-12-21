# coding:utf-8

from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from django.shortcuts import render

from showtime.models import MarkTag, UrlDetail


@api_view(['GET'])
@renderer_classes((JSONRenderer, ))
def get_tags(request):
    result = list()

    querys = MarkTag.objects.values_list('tag_name', flat=True).order_by("-access_times")

    # for q in querys:
    #     result.append(q.tag_name)
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
    message = 'unknow error'

    tag = req.get('tag')
    name = req.get('name')
    href = req.get('href')
    icon = req.get('icon', '0')

    if tag and name and href:
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