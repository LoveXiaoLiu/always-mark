#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: caoshuai

import os
import sys
import time
import traceback
from bs4 import BeautifulSoup
from logging import getLogger
from optparse import make_option
from showtime.models import MarkTag, UrlDetail
from django.core.management.base import BaseCommand

logger = getLogger("default")

reload(sys)
sys.setdefaultencoding('utf-8') 

PARSE_ENGINE = "html5lib"
ROOT_LIST_KEY = "root_list"

class Command(BaseCommand):
    """parse html"""

    def __init__(self):
        super(Command, self).__init__()

    option_list = BaseCommand.option_list + (
            make_option('--htmlfile', dest='htmlfile'),
            make_option('--pid-file', dest='pid_file'),
        )
    
    def handle(self, *urls, **options):
        logger.info("daemon parse_bookmark_xml starting......")

        htmlfile = options.get('htmlfile')
        pid_file = options.get('pid_file')

        if pid_file:
            with open(pid_file, 'a') as f:
                f.write('%d\n' % os.getpid())

        if htmlfile:
            run(htmlfile)
        else:
            print "htmlfile is none"

def run(htmlfile):
    logger.info("start to parse html file ......")
    ret = {}
    bs_obj = None
    with open(htmlfile, 'r') as fhandle:
        bs_obj = BeautifulSoup(fhandle, PARSE_ENGINE)

    if bs_obj:
        head = bs_obj.head
        body = bs_obj.body

        sons = body.children

        key = "Bookmarks"
        try:
            while True:
                nt = sons.next()
                if nt.name == 'h1':
                    key = nt.string if nt.string else key
                    ret[key] = {}
                    continue
                
                if nt.name == 'dl':
                    # parse_dl返回一个字典
                    ret[key] = parse_dl(nt)

        except StopIteration:
            logger.info("body iter end")

    if ret:
        beautiful_data = sort_out_data(ret)
        # print beautiful_data
        start_into_db(beautiful_data)

    # print ret["Bookmarks"][u"书签栏"]["root_list"]
    logger.info("end to parse html file ......")

def start_into_db(beautiful_data):
    for k, v in beautiful_data.items():
        try:
            # print type(k), type(v)
            if k == "Bookmarks":
                continue
            if k == u"书签栏":
                k == u"常用"
            tag_obj = MarkTag(tag_name=k)
            tag_obj.save()

            for item in v:
                url_obj = UrlDetail(
                    tag=tag_obj, 
                    name=item.get("string", "getisnone"),
                    url=item.get("href", "getisnone"),
                    icon=item.get("icon", "getisnone"),
                    create_date=item.get("add_date", time.time()),
                )
                url_obj.save()
        except Exception, e:
            print "reson is:", e
            print "tag is:", k

def sort_out_data(origin_data):
    ret = {}
    for k, v in origin_data.items():
        if not v:
            continue

        if k == "Bookmarks":
            sod = sort_out_data(v)
            ret.update(sod)

        for tag, urls in v.items():
            if tag == ROOT_LIST_KEY:
                ret[k] = urls
            else:
                sod = sort_out_data({tag : urls})
                ret.update(sod)

    return ret


def parse_dl(dl_obj):
    dl_ret = {
        ROOT_LIST_KEY : []
    }
    sons = dl_obj.children
    try:
        while True:
            nt = sons.next()
            if nt.name == 'dt':
                # 返回两种类型，list or dict
                dt_data = parse_dt(nt)

                if isinstance(dt_data, list):
                    # print dt_data[0]["href"]
                    dl_ret[ROOT_LIST_KEY] = dl_ret[ROOT_LIST_KEY] + dt_data

                elif isinstance(dt_data, dict):
                    dl_ret.update(dt_data)

    except StopIteration:
        logger.info("body iter end")
    # print dl_ret
    # time.sleep(10)
    return dl_ret

def parse_dt(dt_obj):
    dt_ret = {
        ROOT_LIST_KEY : []
    }
    key = None

    sons = dt_obj.children
    try:
        while True:
            tmp_l = {}
            nt = sons.next()
            if nt.name == 'a':
                tmp_l.update(nt.attrs)
                tmp_l['string'] = nt.string
                # if tmp_l.has_key('icon'):
                #     del tmp_l['icon']
                return [tmp_l]
            
            if nt.name == 'h3':
                key = nt.string if nt.string else "folder_name_is_null"
                dt_ret[key] = {}
            
            if nt.name == 'dl':
                # parse_dl返回一个字典
                dt_ret[key] = parse_dl(nt)

    except StopIteration:
        logger.info("body iter end")
    # print dt_ret
    # time.sleep(10)
    return dt_ret