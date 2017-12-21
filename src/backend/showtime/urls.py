#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2017-08-05 15:51:26
# @Last Modified by:   anchen
# @Last Modified time: 2017-12-21 21:09:39


from django.conf.urls import patterns, url, include


urlpatterns = patterns(
    'showtime.views',
    url(r'^get_tags/$', 'get_tags'),
    url(r'^get_urls/(?P<tag_name>.*)/$', 'get_urls'),
    url(r'^add_mark/$', 'add_mark'),
)