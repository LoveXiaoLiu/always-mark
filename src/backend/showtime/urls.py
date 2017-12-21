#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2017-08-05 15:51:26
# @Last Modified by:   anchen
# @Last Modified time: 2017-12-21 20:18:34


from django.conf.urls import patterns, url, include


urlpatterns = patterns(
    'showtime.views',
    url(r'^get_tags/$', 'get_tags'),
    url(r'^get_urls/(?P<tag_name>.*)/$', 'get_urls'),
)