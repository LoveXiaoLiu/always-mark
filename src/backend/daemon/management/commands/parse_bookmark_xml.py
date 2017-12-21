#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: caoshuai

import os
import traceback
from bs4 import BeautifulSoup
from logging import getLogger
from optparse import make_option
from django.core.management.base import BaseCommand

logger = getLogger("default")

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
    bs_obj = None
    with open(htmlfile, 'r') as fhandle:
        bs_obj = BeautifulSoup(fhandle, PARSE_ENGINE)

    if bs_obj:
        head = bs_obj.head
        body = bs_obj.body

        sons = body.children

        ret = {}
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

    print ret
    logger.info("end to parse html file ......")

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
                    dl_ret[ROOT_LIST_KEY] = dl_ret[ROOT_LIST_KEY] + dt_data
                elif isinstance(dt_data, dict):
                    dl_ret.update(dt_data)

    except StopIteration:
        logger.info("body iter end")

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
                return [tmp_l]
            
            if nt.name == 'h3':
                key = nt.string if nt.string else "folder_name_is_null"
                dt_ret[key] = {}
                continue
            
            if nt.name == 'dl':
                # parse_dl返回一个字典
                dt_ret[key] = parse_dl(nt)
                continue

    except StopIteration:
        logger.info("body iter end")

    return dt_ret