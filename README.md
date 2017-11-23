# 便捷书签

## 0x01 安装nginx

    sudo apt-get install nginx

配置文件入口路径：/etc/nginx/nginx.conf；
虚拟主机配置路径：/etc/nginx/sites-enabled/default。

## 0x02 安装python虚拟环境
    
    pip install virtualenv；virtualenv --no-site-package ENV_GRASS

路径在/opt/caoshuai/ENV_GRASS。
	
## 0x03 安装mysql
```shell
sudo apt-get install mysql-server

apt-get isntall mysql-client

sudo apt-get install libmysqlclient-dev
```

+ 遇到的问题：
只能本地连接mysql，不能远程连接。首先检查了3306端口是否开启，然后阿里云添加安全组，检查服务器自身的iptables防火墙，mysql创建用户并授权，以上操作都完成了，但是还不能从远程连接，结果是因为mysql配置文件“bind-address = 127.0.0.1”这行搞得鬼，注释掉就好了。参考链接：https://www.cnblogs.com/codeAB/p/6391022.html


## 0x04 安装uwsgi
mysql总算是搞好了，接下来就是搞定uwsgi。

进入虚拟环境，执行命令：pip install uwsgi

接下来是nginx配置文件和uwsgi配置文件的配置，这个是最重要的。

nginx配置文件：
```
upstream django {
        # 反向代理的配置节点，名字叫django的代理，
        # 底下可以配置多个server，可以达到负载均衡的作用
       	server 127.0.0.1:8001; # for a web port socket (we'll use this first)
	}
server {
       	listen 80;
        listen [::]:80;
       	server_name test.yangliu.com;
        root /var/www/caoshuai;
       	index index.html;
        location / {
                # uwsgi_pass就是取的上面配置的upstream的名字：django
                uwsgi_pass django;    
                # 这个配置是uwsgi的参数，这两个配置可以达到将请求转发到uwsgi的作用
       	        include /etc/nginx/uwsgi_params;    

                # try_files $uri $uri/ =404;
       	}
}
```

uwsgi配置文件：
```
# mysite_uwsgi.ini file  
[uwsgi]
# Django-related settings  
# the base directory (full path)  
chdir           = /opt/backend
# Django's wsgi file  
module          = mark.wsgi
# the virtualenv (full path)  
home            = /opt/caoshuai/ENV_GRASS
# process-related settings  
# master  
master          = true
# maximum number of worker processes  
processes       = 4
# the socket (use the full path to be safe  
socket          = 127.0.0.1:8001
# ... with appropriate permissions - may be needed  
# chmod-socket    = 664  
# clear environment on exit 
daemonize=/var/log/uwsgi.log
```

## 0x05 问题
从操作步骤来总结一下问题：
+ 首先安装nginx没有多大问题，配置文件的路径在/etc/nginx/nginx.conf，virtual_host的路径在/etc/nginx/sites-enabled/default，也可以自己写一个配置文件，然后include到主配置文件内；
    
+ 然后安装python虚拟环境没有什么困难；
    
+ 接下来是安装mysql，遇到一些问题，安装时候很顺利，安装完以后从外网（我的是阿里云）访问不了，根据网上的教程，首先查看3306端口是开着的，然后配置了阿里云的安全组，开启了3306端口通过，然后查看防火墙是否阻塞改端口，最后在mysql的mysql库的user表中，增加了用户可从外网访问，即host为%，最后还是不行。皇天不负有心人，最终找到了原因：mysql配置文件中没有注释掉bind-address = 127.0.0.1，绑定的依旧是本地的ip，所以没法从外网访问。

+ 接着是安装uwsgi，这个挺顺利的。

+ 最后是nginx和uwsgi配置文件的配置，开始没有搞清楚怎么做反向代理，不知道upstream的作用，后来配置完了upstream才使得nginx的请求转发到uwsgi上。uwsgi的配置没有什么困难的，主要就是配置一些django项目的路径等等。

+ 可以访问rest接口还是不通，开始报502错误，然后看/var/log/nginx/access.log，接收到了请求，那就是没有转发到uwsgi中，再看/var/log/error.log，报连接拒绝的错误，在网上搜了一下，也没有找到什么解决方法；然后又报500错误了，使用python manager.py runserver启动django项目，发现有报错，没有yaml和MySQL-python插件，安装完插件，重启服务，然后就可以访问通了


## PS:
在Ubuntu终端彻底删除软件：

1、删除软件

	方法一、如果你知道要删除软件的具体名称，可以使用               

	sudo apt-get remove --purge 软件名称  
	sudo apt-get autoremove --purge 软件名称 

	方法二、如果不知道要删除软件的具体名称，可以使用

	dpkg --get-selections | grep ‘软件相关名称’

	sudo apt-get purge 一个带core的package，如果没有带core的package，则是情况而定。

2、清理残留数据

	dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P 


## 解析Bookmark.html文件


[File Format](https://msdn.microsoft.com/en-us/library/aa753582(v=vs.85).aspx)

The file starts with the following text:

```html
    <!DOCTYPE NETSCAPE-Bookmark-file-1>
    <!--This is an automatically generated file.
    It will be read and overwritten.
    Do Not Edit! -->
    <Title>Bookmarks</Title>
    <H1>Bookmarks</H1>
```

The rest of the file is as follows:
```html
    <DL>
    {item}
    {item}
    {item}
    .
    .
    .
    </DL>
```

An item may be a subfolder, shortcut, feed, Web Slice, or icon.

If {item} refers to a subfolder, it is:

```html
    <DT><H3 FOLDED ADD_DATE="{date}">{title}</H3>
    <DL><p>
        {item}
        {item}
        {item}
        .
        .
        .
    </DL><p>
```

If {item} refers to a shortcut, it is:

```html
    <DT><A HREF="{url}" ADD_DATE="{date}" LAST_VISIT="{date}"
    LAST_MODIFIED="{date}">{title}</A>
```

If {item} refers to a feed, it is:

```html
    FEED="true"
    FEEDURL="href... "
```

If {item} refers to a Web Slice, it is:

```html
    WEBSLICE="true"
    ISLIVEPREVIEW="true"

    PREVIEWSIZE="w x h"
```

If {item} refers to an icon, it is:

```html
    {item}

    ICON_URI="href... "
```

**Note**

+ Throughout this file format definition, {date} is a decimal integer that represents the number of seconds elapsed since midnight January 1, 1970.