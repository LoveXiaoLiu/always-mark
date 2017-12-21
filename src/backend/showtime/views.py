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

    querys = MarkTag.objects.all()

    for q in querys:
        result.append(q.tag_name)


    ret = {'status': 200, 'result': result, 'message': 'success'}
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

    ret = {'status': 200, 'result': result, 'message': 'success'}
    return Response(ret)