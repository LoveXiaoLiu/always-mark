# coding:utf-8

import hashlib

def get_md5(str):
    m2 = hashlib.md5()
    m2.update(str)
    return m2.hexdigest()