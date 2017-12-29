# coding:utf-8

import hashlib

def get_md5(str):
    m2 = hashlib.md5()
    m2.update(src)
    return m2.hexdigest()