#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2017-08-05 15:51:26
# @Last Modified by:   anchen
# @Last Modified time: 2017-08-10 11:56:10


from django.conf.urls import patterns, url, include


urlpatterns = patterns(
    'showtime.views',
    url('^get_tags/', 'get_tags'),
)