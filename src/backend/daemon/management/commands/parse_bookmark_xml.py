#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: caoshuai
# @Date:   2017-09-29 17:47:05
# @Last Modified by:   caoshuai
# @Last Modified time: 2017-09-30 15:53:35

from BeautifulSoup import BeautifulSoup
from django.core.management.base import BaseCommand
import traceback

class Command(BaseCommand):
    """parse html"""

    def __init__(self, arg):
        super(Command, self).__init__()
        self.arg = arg

    option_list = BaseCommand.option_list + (
            make_option('--htmlfile', dest='htmlfile'),
        )
    
    def handle(self, *urls, **options):
        htmlfile = options.get('htmlfile')

        if htmlfile:
            run(htmlfile)
        else:
            print "htmlfile is none"


def run(htmlfile):
    data_str = ''
    try:
        ff = open(htmlfile)
        data_str = ff.read()
    except:
        print traceback.format_exc()
    finally:
        ff.close()

    data_bs = remove_other_and_beautiful(data_str)
    parse_data_dict = parse_html_to_dict(data_bs)

    save_to_database(parse_data_dict)


def remove_other_and_beautiful(data_str):
    ret_dict = dict()

    data_bs = BeautifulSoup(data_str)
    lasttime_tag = None
    lasttime_key = None
    for data in data_bs:
        try:
            tag = data.name
            text = data.string

            if 'h3' == tag:
                if lasttime_tag == tag:
                    continue
                
                if u'书签栏' == text:
                    continue

                lasttime_key = text

                if not ret_dict.has_key(text):
                    ret_dict[text] = list()
            elif 'a' == tag:
                tmp_dict = dict()

                try:
                    tmp_dict['name'] = text
                    tmp_dict['url'] = data.get('href')
                except:
                    pass

                ret_dict.get(lasttime_key, list()).append(tmp_dict)

            lasttime_tag = tag

        except Exception, e:
            # print traceback.format_exc()
            continue
    return ret_dict