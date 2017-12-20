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

class Command(BaseCommand):
    """parse html"""

    def __init__(self, arg):
        super(Command, self).__init__()
        self.arg = arg

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
                f.write('%d\n', % os.getpid())

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

        dl = body.dl

        parse_dl(dl.children)

        parse_dt()

    logger.info("end to parse html file ......")

def parse_dl(dl_iter):
    try:
        while True:
            
    except StopIteration:
        logger.info("iteration end")