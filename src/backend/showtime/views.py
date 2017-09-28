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
