/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-21 20:33:34
*/

var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http', function($scope, $http){

    var apiurl = '/get_tags/';
    console.log(apiurl)

    $http({
        url    : apiurl,
        method : 'GET',
    }).success(function (response, header, config, status) {
        console.log(response)
        $scope.labs = response.result;
    })

    $scope.colorr = {
        0 : "primary",
        1 : "success",
        2 : "info",
        3 : "warning",
        4 : "danger",
        5 : "default",
    }

    $http({
        url    : '/get_urls/数据库/',
        method : 'GET',
    }).success(function (response, header, config, status) {
        console.log(response)
        $scope.marks = response.result;
    })

    // $scope.marks = {
    //     "RFS": [
    //         {
    //             "url": "http://www.robotframework.net/",
    //             "name": "帮助中心 - RobotframeWork社交化知识社区"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/fnng/",
    //             "name": "虫师 - 博客园"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/tulituqi",
    //             "name": "RFS界面自动化"
    //         },
    //         {
    //             "url": "http://robotframework.org/",
    //             "name": "Robot Framework"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/dreamer-fish/p/3818443.html",
    //             "name": "Python中的字符串处理 - 爱做梦的鱼 - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/yangxia-test/p/4637168.html",
    //             "name": "如何使用AutoIT完成单机测试 - 阳光温暖了心情 - 博客园"
    //         },
    //         {
    //             "url": "http://www.codeweblog.com/category/robotframework/",
    //             "name": "RobotFramework - CodeWeblog.com"
    //         },
    //         {
    //             "url": "http://www.codeweblog.com/%e6%89%a9%e5%b1%95rf-%e5%ae%9e%e7%8e%b0%e5%a4%b1%e8%b4%a5%e7%94%a8%e4%be%8b%e8%87%aa%e5%8a%a8%e5%86%8d%e6%89%a7%e8%a1%8c/",
    //             "name": "扩展RF,实现失败用例自动再执行 - CodeWeblog.com"
    //         },
    //         {
    //             "url": "http://www.gateside.cn/",
    //             "name": "接口测试自动化 - Web UI，接口自动化测试"
    //         },
    //         {
    //             "url": "http://www.51testing.com/html/90/category-catid-90.html",
    //             "name": "软件测试技术 - 51Testing软件测试网-中国软件测试人的精神家园"
    //         }
    //     ],
    //     "github-blog": [
    //         {
    //             "url": "http://www.2cto.com/os/201411/351818.html",
    //             "name": "Windows上通过本地搭建Jekyll环境 - Windows操作系统 - 红黑联盟"
    //         },
    //         {
    //             "url": "http://www.jianshu.com/p/12b0099d4625#",
    //             "name": "使用Github和Jekyll搭建博客 - 简书"
    //         },
    //         {
    //             "url": "http://bbs.chinaunix.net/thread-658754-1-1.html",
    //             "name": "[转贴]揭开Linux的Swap之谜-系统管理-ChinaUnix.net"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/purediy/archive/2013/03/07/2948892.html",
    //             "name": "[原]通过GitHub Pages建立个人站点（详细步骤） - 雨知 - 博客园"
    //         },
    //         {
    //             "url": "https://www.zhihu.com/#signin",
    //             "name": "首页 - 知乎"
    //         },
    //         {
    //             "url": "https://github.com/LoveXiaoLiu",
    //             "name": "LoveXiaoLiu (grass)"
    //         },
    //         {
    //             "url": "http://unclechen.github.io/2015/01/31/%E4%BD%BF%E7%94%A8Jekyll%E6%B8%B2%E6%9F%93GitHub%20Pages%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/",
    //             "name": "使用Jekyll渲染GitHub Pages个人博客 · Uncle Chen"
    //         },
    //         {
    //             "url": "http://my.oschina.net/wangxnn/blog/499854",
    //             "name": "使用GitHub Pages搭建博客 - 新年 - 开源中国社区"
    //         },
    //         {
    //             "url": "http://blogwall.us/",
    //             "name": "程序员博客墙"
    //         },
    //         {
    //             "url": "http://www.freehao123.com/wordpress-com/",
    //             "name": "wordpress.com免费3GB空间的官方博客服务 | 免费资源部落"
    //         },
    //         {
    //             "url": "http://www.freehao123.com/freewebhostingarea-com/",
    //             "name": "FreeWebHostingArea老牌1.5G无限流量免费PHP空间申请使用 | 免费资源部落"
    //         },
    //         {
    //             "url": "http://wanwang.aliyun.com/hosting/free/",
    //             "name": "万网免费主机-虚拟主机-虚拟空间-万网（www.net.cn）"
    //         },
    //         {
    //             "url": "http://www.wpdaxue.com/wordpress-hosting.html",
    //             "name": "WordPress入门 之 搭建WordPress站点需要什么条件？ | WordPress大学"
    //         },
    //         {
    //             "url": "https://www.blogpark.net/?p=8",
    //             "name": "如何搭建WordPress？ | 博客公园"
    //         },
    //         {
    //             "url": "http://beginman.cn/",
    //             "name": "编程是一门思考，总结，创新的艺术!"
    //         },
    //         {
    //             "url": "http://i.cnblogs.com/EditArticles.aspx",
    //             "name": "博客后台管理 - 博客园"
    //         },
    //         {
    //             "url": "http://rogerdudler.github.io/git-guide/index.zh.html",
    //             "name": "git - the simple guide - no deep shit!"
    //         },
    //         {
    //             "url": "http://www.appinn.com/markdown/",
    //             "name": "Markdown 语法说明(简体中文版)"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/hnrainll/p/3514637.html",
    //             "name": "Markdown 11种基本语法 - Leo Chin - 博客园"
    //         },
    //         {
    //             "url": "http://www.yangliu.date/",
    //             "name": "烂好人！"
    //         },
    //         {
    //             "url": "https://twitter.com/",
    //             "name": "Twitter"
    //         },
    //         {
    //             "url": "https://www.facebook.com/",
    //             "name": "Facebook"
    //         }
    //     ],
    //     "博客相关": [
    //         {
    //             "url": "https://limh.me/",
    //             "name": "明月浩空"
    //         },
    //         {
    //             "url": "https://aws.amazon.com/cn/",
    //             "name": "AWS 云服务"
    //         },
    //         {
    //             "url": "https://lnmp.org/",
    //             "name": "LNMP一键安装包 - CentOS/RadHat/Debian/Ubuntu下自动编译安装Nginx,PHP,MySQL,PHPMyAdmin"
    //         }
    //     ],
    //     "node": [
    //         {
    //             "url": "http://blog.csdn.net/zhangwenwu2/article/details/52778521",
    //             "name": "npm用法以及更换到淘宝镜像的方法"
    //         },
    //         {
    //             "url": "https://www.zhihu.com/question/35595198/answer/67223812",
    //             "name": "前端构建工具是什么？ - 知乎"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/geniushuangxiao/p/6823334.html",
    //             "name": "001Angular2环境准备"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/window24/article/details/52539915",
    //             "name": "前端环境的安装与配置 - window24的专栏 - CSDN博客"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/119496.htm",
    //             "name": "教你5分钟学会用requirejs(必看篇)_javascript技巧_脚本之家"
    //         },
    //         {
    //             "url": "https://dirtysalt.github.io/images/the-django-book/index.html",
    //             "name": "The Django Book【利器】"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/shanyou/archive/2012/05/12/2496959.html",
    //             "name": "REST 入门介绍 - 张善友 - 博客园"
    //         },
    //         {
    //             "url": "http://www.runoob.com/",
    //             "name": "菜鸟教程 - 学的不仅是技术，更是梦想！"
    //         },
    //         {
    //             "url": "http://www.docker.org.cn/index.html",
    //             "name": "docker中文社区,docker帮助,docker手册,docker教程,docker安装手册 - docker中文社区"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/fnng/p/3998774.html",
    //             "name": "djngo快速实现--使用Bootstrap - 虫师 - 博客园"
    //         },
    //         {
    //             "url": "http://www.tuicool.com/articles/RBZ3am",
    //             "name": "整合django和bootstrap框架 - 推酷"
    //         },
    //         {
    //             "url": "https://www.hx-ss.cc/clientarea.php",
    //             "name": "vpn-红杏影梭(HXSS)"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/fengri/articles/django5.html",
    //             "name": "五、在django中使用MySQL数据库（一） - 平日 - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/wendoudou/p/mysql.html",
    //             "name": "python Django 学习笔记（四）—— 使用MySQL数据库 - 文豆豆 - 博客园"
    //         },
    //         {
    //             "url": "http://wenku.baidu.com/link?url=a-NoC04Rdne0ZzH226B796XjuQSsGKnIp7ua9WJaMykMJ8bAzXms_0T79HT5kh7CwRtKZAvramFei7RIIbQqawOBE_3OsaJqHZ-okS_GLg7",
    //             "name": "【图文】html标签全称_百度文库"
    //         },
    //         {
    //             "url": "https://ke.qq.com/",
    //             "name": "腾讯课堂_专业的在线教育平台(ke.qq.com)"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/kaituorensheng/p/3776527.html",
    //             "name": "URL中“#” “？” &amp;“”号的作用 - jihite - 博客园"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/ergouge/article/details/8185219",
    //             "name": "详解URL的组成 - 野生程序猿 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.python88.com/",
    //             "name": "Python社区 - 专注于Python技术发展的社区(原Django社区)"
    //         },
    //         {
    //             "url": "http://www.jobbole.com/",
    //             "name": "伯乐在线"
    //         },
    //         {
    //             "url": "http://d-roger.com/2016/06/27/hvae/",
    //             "name": "django实战项目 内容管理系统cms (一)项目搭建及准备 – D-Roger"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/normal_wy/article/details/8296177",
    //             "name": "数据库中的数据表之间的关系 - normal_cai的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/lengjinghk/article/details/52140276",
    //             "name": "数据库设计(表与表之间的3种关系) - lengjinghk的博客 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/lins05/archive/2012/12/02/2797996.html",
    //             "name": "Django 的 CSRF 保护机制 - 林帅的博客 - 博客园"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/parrot18/article/details/8617405",
    //             "name": "Django中的request.GET和request.POST - YingRu&#39;s lab - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/gideal_wang/article/details/4316691",
    //             "name": "HTTP POST GET 本质区别详解 - gideal_wang的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.quackit.com/html/templates/",
    //             "name": "HTML Templates[前端模板]"
    //         },
    //         {
    //             "url": "http://kb.cnblogs.com/page/133765/",
    //             "name": "URL编码与解码_知识库_博客园"
    //         },
    //         {
    //             "url": "http://www.qdfuns.com/notes/30191/424f11685671eff6537a00af65b0c4d4.html",
    //             "name": "结合个人经历总结的前端入门方法 - 笔记 - 前端网（QDFuns）"
    //         },
    //         {
    //             "url": "https://github.com/LoveXiaoLiu/fks",
    //             "name": "LoveXiaoLiu/fks: 前端技能汇总 Frontend Knowledge Structure"
    //         },
    //         {
    //             "url": "https://github.com/h5bp/Front-end-Developer-Interview-Questions",
    //             "name": "h5bp/Front-end-Developer-Interview-Questions: A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore."
    //         },
    //         {
    //             "url": "http://www.qdfuns.com/",
    //             "name": "前端网（QDFuns） - WEB前端开发工程师专业网站，一站式服务平台！"
    //         },
    //         {
    //             "url": "http://www.w3school.com.cn/tags/tag_comment.asp",
    //             "name": "HTML &lt;!--...--&gt; 标签"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/52484.htm",
    //             "name": "JS获取客户端IP地址、MAC和主机名的7个方法汇总_javascript技巧_脚本之家"
    //         },
    //         {
    //             "url": "http://www.41443.com/HTML/PHP/20161019/502754.html",
    //             "name": "全栈开发必备的10款Sublime Text 插件_PHP"
    //         },
    //         {
    //             "url": "http://www.dede888.com/",
    //             "name": "dedecms织梦_dede仿站教程网_DEDE新手教程网-DEDE仿站培训网"
    //         },
    //         {
    //             "url": "https://segmentfault.com/a/1190000002418709",
    //             "name": "一个分布式服务器集群架构方案"
    //         },
    //         {
    //             "url": "https://foofish.net/proxy-and-reverse-proxy.html",
    //             "name": "正向代理与反向代理"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/lvze0321/article/details/53214279",
    //             "name": "urlpatterns的写法和patterns函数"
    //         },
    //         {
    //             "url": "http://www.django-rest-framework.org/",
    //             "name": "Django REST framework"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/yjwx0018/article/details/52959704",
    //             "name": "《Django Web开发指南》 笔记（一）"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-21633169-id-4312465.html",
    //             "name": "Django URL调度详述"
    //         },
    //         {
    //             "url": "http://blog.163.com/seo_luofeng/blog/static/17657502420120913641444/",
    //             "name": "URL中#号(井号)的作用"
    //         },
    //         {
    //             "url": "http://www.httpwatch.com/",
    //             "name": "HttpWatch"
    //         },
    //         {
    //             "url": "http://webjike.com/web.html",
    //             "name": "小呆导航-内容最全的前端网址导航"
    //         },
    //         {
    //             "url": "http://www.apjs.net/",
    //             "name": "AngularJS中文网"
    //         },
    //         {
    //             "url": "https://angular.cn/",
    //             "name": "一套框架，多种平台 - Angular"
    //         },
    //         {
    //             "url": "https://developer.mozilla.org/zh-CN/",
    //             "name": "Mozilla 开发者网络"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/ck168/p/5652773.html",
    //             "name": "请求WebApi的几种方式"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/svalbardksy/article/details/50548073",
    //             "name": "Django笔记 Django REST Framework实现Web API 1 "
    //         },
    //         {
    //             "url": "http://blog.csdn.net/seele52/article/details/14105445",
    //             "name": "用Django Rest Framework和AngularJS开始你的项目"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/linxiyue/p/3667418.html",
    //             "name": "Django文档——Model中的ForeignKey,ManyToManyField与OneToOneField"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/walkerwang/archive/2011/04/28/2031298.html",
    //             "name": "django Meta 选项"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/xiangyong58/article/details/50569071",
    //             "name": "JavaScript define"
    //         },
    //         {
    //             "url": "http://www.xker.com/page/e2015/02/159653.html",
    //             "name": "AngularJs根据访问的页面动态加载Controller的解决方案"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/lsr17/p/6379231.html",
    //             "name": "angularJs-route路由详解"
    //         },
    //         {
    //             "url": "http://www.angularjs.cn/",
    //             "name": "Angular中文社区"
    //         },
    //         {
    //             "url": "https://docs.angularjs.org/api/ng/service/$http",
    //             "name": "AngularJS官方文档"
    //         },
    //         {
    //             "url": "http://www.jianshu.com/p/9caff5c3ab49",
    //             "name": "Django简易教程之一（models）"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/caseast/p/5821216.html",
    //             "name": "Django models对象的select_related方法（减少查询次数） - 详解"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/divinehe/article/details/40042399",
    //             "name": "使用angularjs实现下载文件的功能"
    //         },
    //         {
    //             "url": "https://chensd.com/2015-01/45-useful-javascript-tips-tricks-and-best-practices.html",
    //             "name": "JavaScript奇技淫巧45招 [ 不可能不确定 ]"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_90bc5fc60102vl7m.html",
    //             "name": "Django 之 下载文件_AncyLQ_新浪博客"
    //         },
    //         {
    //             "url": "http://www.w2bc.com/article/216516",
    //             "name": "angularJS+requireJS实现controller及directive的按需加载"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/bzfys/article/details/53515504",
    //             "name": "Python-第三方库requests详解"
    //         },
    //         {
    //             "url": "http://www.divcss5.com/rumen/r120.shtml",
    //             "name": "CSS border边框属性教程(color style) "
    //         },
    //         {
    //             "url": "http://www.thinksaas.cn/topics/0/404/404264.html",
    //             "name": "Python+django实现文件下载【实用】"
    //         },
    //         {
    //             "url": "http://www.runoob.com/angularjs/angularjs-reference.html",
    //             "name": "AngularJS 指令使用-参考手册"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/shanliangliuxing/article/details/8207124",
    //             "name": "django中数据库操作-操作符总结"
    //         },
    //         {
    //             "url": "http://docs.python-requests.org/zh_CN/latest/",
    //             "name": "python-requests库详解"
    //         },
    //         {
    //             "url": "http://www.divcss5.com/",
    //             "name": "DIVCSS5 - DIV+CSS布局教程学习与CSS资源分享平台"
    //         },
    //         {
    //             "url": "https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html",
    //             "name": "Elasticsearch-分布式搜索分析引擎"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-21633169-id-4374219.html",
    //             "name": "Django模型层Meta内部类详解"
    //         },
    //         {
    //             "url": "http://ju.outofmemory.cn/entry/121904",
    //             "name": "AngularJS 中的 factory、 service 和 provider"
    //         },
    //         {
    //             "url": "https://www.zybuluo.com/bornkiller/note/6023",
    //             "name": "angular模板加载 ----ng-template"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/csdn_lihe/article/details/49633481",
    //             "name": "angularjs 弹出框 $modal"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/54750.htm",
    //             "name": "javascript的回调函数"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/1000/p/getting-started-with-promises.html",
    //             "name": "初识JavaScript Promises"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/xing901022/p/4928147.html",
    //             "name": "AngularJS 中的Promise—$q服务详解"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/wooshn/article/details/8069087/",
    //             "name": "WebService到底是什么？"
    //         },
    //         {
    //             "url": "http://blog.kevinastone.com/",
    //             "name": "Kevin Stone"
    //         },
    //         {
    //             "url": "https://www.rapospectre.com/",
    //             "name": "RaPoSpectre的个人博客"
    //         },
    //         {
    //             "url": "https://segmentfault.com/a/1190000004399682",
    //             "name": "Django REST framework的各种技巧"
    //         },
    //         {
    //             "url": "http://www.ha97.com/5095.html",
    //             "name": "系统吞吐量（TPS）、用户并发量、性能测试概念和公式"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/melonjiang/p/5342505.html",
    //             "name": "Python—操作redis"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/dglives/p/3454977.html",
    //             "name": "如何将wordpress网站转移到本地运行测试 - xuefeng3600 - 博客园"
    //         },
    //         {
    //             "url": "https://m.aliyun.com/yunqi/articles/34240",
    //             "name": "Nginx报 No input file specified. 的问题解决之路"
    //         },
    //         {
    //             "url": "http://doc.redisfans.com/",
    //             "name": "Redis 命令参考 — Redis 命令参考"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/xlgen157387/article/details/49781487",
    //             "name": "Nginx初探"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/u010796790/article/details/45156221",
    //             "name": "sublime 的ZenCoding的强大用法"
    //         },
    //         {
    //             "url": "https://zhidao.baidu.com/question/756281396362983644.html",
    //             "name": "如何让div中的长文本自动换行_百度知道"
    //         }
    //     ],
    //     "提权": [
    //         {
    //             "url": "https://hack0nair.me/2013-05-01-udf-privilege-escalating-on-mysql/",
    //             "name": "mysql的udf提权方法"
    //         }
    //     ],
    //     "网络安全资料": [
    //         {
    //             "url": "http://www.sameip.org/",
    //             "name": "Find websites hosted on the same ip - SameIP.org"
    //         },
    //         {
    //             "url": "http://whois.chinaz.com/",
    //             "name": "chinasofti.com的Whois信息 - 站长工具"
    //         },
    //         {
    //             "url": "https://www.who.is/",
    //             "name": "WHOIS Search, Domain Name, Website, and IP Tools - Who.is"
    //         },
    //         {
    //             "url": "https://www.whatweb.net/",
    //             "name": "WhatWeb - Next generation web scanner."
    //         },
    //         {
    //             "url": "http://www.kali.org.cn/forum.php",
    //             "name": "Kali Linux论坛(Backtrack)_bt3_bt4_bt5-关注无线网络安全、互联网安全动态 - Kali中文网"
    //         },
    //         {
    //             "url": "https://www.onlinehashcrack.com/",
    //             "name": "Online Password Hash Crack - MD5 NTLM MySQL Wordpress Joomla WPA"
    //         },
    //         {
    //             "url": "http://www.freebuf.com/sectool/4708.html",
    //             "name": "[TOP10]十大渗透测试演练系统 - FreeBuf.COM | 关注黑客与极客"
    //         },
    //         {
    //             "url": "https://wenku.baidu.com/view/8ab833745901020207409cd4.html",
    //             "name": "漏洞演示系统DVWA攻略_百度文库"
    //         },
    //         {
    //             "url": "http://www.hetianlab.com/",
    //             "name": "合天网安实验室-国内大型MOOE在线实验室"
    //         },
    //         {
    //             "url": "http://163.donothackme.club/",
    //             "name": "社工库-密码查询"
    //         },
    //         {
    //             "url": "http://www.cmd5.com/",
    //             "name": "md5在线解密破解"
    //         },
    //         {
    //             "url": "http://www.360doc.com/content/13/0614/22/11029609_292922372.shtml#",
    //             "name": "十大渗透测试演练系统 DVWA"
    //         },
    //         {
    //             "url": "http://taiji007.blog.51cto.com/11034834/1738532",
    //             "name": "dvwa安装和使用指南"
    //         },
    //         {
    //             "url": "https://www.kernel-exploits.com/",
    //             "name": "kernel exploits 根据内核寻找exp"
    //         },
    //         {
    //             "url": "https://dev.w3.org/html5/html-author/charref",
    //             "name": "URL实体编码对照表"
    //         },
    //         {
    //             "url": "https://haveibeenpwned.com/",
    //             "name": "账户密码泄露查询"
    //         },
    //         {
    //             "url": "http://www.freebuf.com/sectool/133949.html",
    //             "name": "Hacking Tools搜罗大集合"
    //         }
    //     ],
    //     "python": [
    //         {
    //             "url": "http://www.testingunion.com/index.php/artlist/6/2.shtml",
    //             "name": "python|软件测试联盟| python groovy webdriver robotium appium jmeter soapui loadrunner ieee 自动化测试 接口测试 性能测试"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/Peter-Zhang/archive/2011/12/25/2300943.html",
    //             "name": "Python 基础语法(四) - PeterZhang - 博客园"
    //         },
    //         {
    //             "url": "http://wenku.baidu.com/view/239c0765783e0912a2162ab3.html###",
    //             "name": "Python中文手册(汉译)Word文字可编辑版_百度文库"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/hitlion2008/article/details/9285785",
    //             "name": "老鸟的Python入门教程 - 浪人的星空 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/IPrograming/p/Python_standard_lib.html",
    //             "name": "【循序渐进学Python】11.常用标准库 - gyzhao - 博客园"
    //         },
    //         {
    //             "url": "https://docs.python.org/2/library/index.html",
    //             "name": "The Python Standard Library — Python 2.7.11rc1 documentation"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/hongten/p/hongten_python_xml_etree_elementtree.html",
    //             "name": "python开发_xml.etree.ElementTree_XML文件操作_该模块在操作XML数据是存在安全隐患_慎用 - Hongten - 博客园"
    //         },
    //         {
    //             "url": "http://img.jb51.net/tag/%B8%FA%C0%CF%C6%EB%D1%A7Python/2.htm",
    //             "name": "跟老齐学Python相关资料-脚本之家"
    //         },
    //         {
    //             "url": "https://docs.python.org/2/library/",
    //             "name": "The Python Standard Library — Python 2.7.11 documentation"
    //         },
    //         {
    //             "url": "https://pypi.python.org/pypi/WMI/#downloads",
    //             "name": "WMI 1.4.9 : Python Package Index"
    //         },
    //         {
    //             "url": "https://msdn.microsoft.com/en-us/library/aa394217.aspx",
    //             "name": "Win32_NetworkAdapterConfiguration class (Windows)"
    //         },
    //         {
    //             "url": "https://msdn.microsoft.com/en-us/library/aa390383.aspx",
    //             "name": "EnableStatic method of the Win32_NetworkAdapterConfiguration class (Windows)"
    //         },
    //         {
    //             "url": "http://www.testingunion.com/index.php/artlist/6.shtml",
    //             "name": "python|软件测试联盟| python groovy webdriver robotium appium jmeter soapui loadrunner ieee 自动化测试 接口测试 性能测试"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/BeginMan/p/3327291.html",
    //             "name": "Python 模块学习：os模块 - BeginMan - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/BeginMan/p/3510786.html",
    //             "name": "Python OOP(1):从基础开始 - BeginMan - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/BeginMan/p/3183656.html",
    //             "name": "Python入门笔记(23)：模块 - BeginMan - 博客园"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/15707.htm",
    //             "name": "比较详细Python正则表达式操作指南(re使用)_python_脚本之家"
    //         },
    //         {
    //             "url": "http://www.yiibai.com/python/python_basic_operators.html",
    //             "name": "Python基本运算符 - Python教程"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_a15aa56901017liq.html",
    //             "name": "python 详解re模块_Rocky_新浪博客"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/34642.htm",
    //             "name": "python的正则表达式re模块的常用方法_python_脚本之家"
    //         },
    //         {
    //             "url": "http://bbs.chinaunix.net/thread-3987682-1-1.html",
    //             "name": "我写的一些Python教程，需要的可以看看 v2013-03-18-Python-ChinaUnix.net"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/the_fire/article/details/7252472/",
    //             "name": "python十个实战项目 - the_fire的技术博客 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.crifan.com/summary_the_meaning_of_self_and___init___in_python_and_why_need_them/",
    //             "name": "【整理】Python中：self和__init__的含义 + 为何要有self和__init__ | 在路上"
    //         },
    //         {
    //             "url": "http://www.lupaworld.com/article-252705-1.html",
    //             "name": "十分钟学习Python的进阶语法 - 技术文摘 - LUPA开源社区"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/linuxcat/archive/2012/01/05/2220997.html",
    //             "name": "深入理解python之self - Frank.Wu - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/linjiqin/p/3608541.html",
    //             "name": "python数据类型详解 - Ruthless - 博客园"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/47972.htm",
    //             "name": "Python基本数据类型详细介绍_python_脚本之家"
    //         },
    //         {
    //             "url": "http://pmghong.blog.51cto.com/3221425/1353340",
    //             "name": "Python 学习笔记 （7）—— OS模块 - pmghong - 51CTO技术博客"
    //         },
    //         {
    //             "url": "http://www.the5fire.com/python-pro-powerfullxml.html",
    //             "name": "python项目练习三：万能的XML | the5fire的技术博客"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/ccat/article/details/8364",
    //             "name": "Python指南——类 - 追寻真理之美 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.ynpxrz.com/n905106c2025.aspx",
    //             "name": "Python中的对象，方法，类，实例，函数用法分析"
    //         },
    //         {
    //             "url": "http://www.yiibai.com/python/python_gui_programming.html",
    //             "name": "Python GUI编程(Tkinter)"
    //         },
    //         {
    //             "url": "http://www.pythontab.com/",
    //             "name": "PythonTab：Python中文开发者社区门户"
    //         },
    //         {
    //             "url": "http://www.pythontab.com/html/2013/pythonjichu_0107/109.html",
    //             "name": "python常用函数年初大总结 - Python基础教程|Python教程|Python入门 - PythonTab中文网"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/xuxm2007/archive/2011/01/16/1936610.html",
    //             "name": "使用minidom来处理XML的示例(Python 学习)(转载) - 阿笨猫 - 博客园"
    //         },
    //         {
    //             "url": "http://www.runoob.com/python/att-string-replace.html",
    //             "name": "Python replace()方法 | 菜鸟教程"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/rollenholt/archive/2011/08/01/2123889.html",
    //             "name": "Python中使用中文 - Rollen Holt - 博客园"
    //         },
    //         {
    //             "url": "http://www.douban.com/note/317763452/",
    //             "name": "python中文处理之encode/decode函数"
    //         },
    //         {
    //             "url": "http://www.pythondoc.com/flask-mega-tutorial/index.html",
    //             "name": "欢迎进入Flask大型教程项目！ — flask mega-tutorial 1.0 documentation"
    //         },
    //         {
    //             "url": "http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000",
    //             "name": "Python 2.7教程 - 廖雪峰的官方网站"
    //         },
    //         {
    //             "url": "http://my.oschina.net/jastme/blog/506682",
    //             "name": "测试你的Python 水平----3 - jastme - 开源中国社区"
    //         },
    //         {
    //             "url": "http://www.pythondoc.com/flask-mega-tutorial/helloworld.html",
    //             "name": "Hello World — flask mega-tutorial 1.0 documentation"
    //         },
    //         {
    //             "url": "http://nbviewer.jupyter.org/github/lijin-THU/notes-python/blob/master/index.ipynb",
    //             "name": "Jupyter Notebook Viewer"
    //         },
    //         {
    //             "url": "http://www.liaoxuefeng.com/",
    //             "name": "廖雪峰的官方网站"
    //         },
    //         {
    //             "url": "https://docs.python.org/2/library/exceptions.html#exception-hierarchy",
    //             "name": "python抛出的常见异常"
    //         },
    //         {
    //             "url": "http://www.runoob.com/python/func-number-cmp.html",
    //             "name": "python菜鸟教程"
    //         },
    //         {
    //             "url": "http://blog.jobbole.com/21351/",
    //             "name": "深刻理解Python中的元类(metaclass) - 博客 - 伯乐在线"
    //         },
    //         {
    //             "url": "http://zhidao.baidu.com/link?url=SP8WiIN-L--JHdHznWw5VnGd2lsiWdo_9ckGiqGLGRJK2Lw0XuAMboAvl7fxCllCJy2rOp7Z4q26GVptmtsFHYfm6Sbily2F5wIHnOee2Cu",
    //             "name": "Python 奇技淫巧_百度知道"
    //         },
    //         {
    //             "url": "http://raolonghui.com/index.php/archives/188.html",
    //             "name": "使用mysql-connector-python | 饶珑辉-HOME"
    //         },
    //         {
    //             "url": "http://www.php100.com/html/webkaifa/database/Mysql/2009/0910/3288.html",
    //             "name": "MySql常用命令总结"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/oonets334/article/details/7647892",
    //             "name": "Jinja2 简明使用手册（转载） - oonets334的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.hubwiz.com/course/562efe441bc20c980538e801/",
    //             "name": "Django: 路由与视图 - 汇智网"
    //         },
    //         {
    //             "url": "http://www.ibm.com/developerworks/cn/linux/l-django/",
    //             "name": "Python Web 框架，第 1 部分: 使用 Django 和 Python 开发 Web 站点"
    //         },
    //         {
    //             "url": "http://www.educity.cn/wenda/355897.html",
    //             "name": "python系统学习笔记（十）---类self类的方法与普通的函数只有一个特别的区别——它们必须有_IT知识问答_希赛网"
    //         },
    //         {
    //             "url": "http://www.pythonclub.org/python-network-application/cgi",
    //             "name": "Python CGI 编程 | 类FieldStorage的使用 [Python俱乐部]"
    //         },
    //         {
    //             "url": "http://www.runoob.com/python/python-cgi.html",
    //             "name": "Python CGI编程 | 菜鸟教程"
    //         },
    //         {
    //             "url": "https://docs.python.org/2/library/functions.html#abs",
    //             "name": "python内置方法"
    //         },
    //         {
    //             "url": "http://www.ziqiangxuetang.com/django/django-tutorial.html",
    //             "name": "Django 基础教程 - 自强学堂"
    //         },
    //         {
    //             "url": "https://www.almsaeedstudio.com/",
    //             "name": "python前端"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/devil_2009/article/details/41735611",
    //             "name": "Django模型的Field Types总结"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/scelong/article/details/6961141",
    //             "name": "总结一下在Windows上安装MySQLdb - 小小程序员的世界 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/wklken/article/details/7253245",
    //             "name": "python MySQLdb在windows环境下的快速安装、问题解决方式 - wklken的笔记 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/zhangzhu/archive/2013/07/04/3172486.html",
    //             "name": "Mysql命令大全 - 宁静.致远 - 博客园"
    //         },
    //         {
    //             "url": "https://www.douban.com/note/278152737/",
    //             "name": "django render()和render_to_response()和direct_to_template() 和locals()"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/jk007/article/details/8212160",
    //             "name": "python request内容"
    //         },
    //         {
    //             "url": "http://www.ziqiangxuetang.com/django/django-cms-develop.html",
    //             "name": "Django 开发内容管理系统 - Django 教程 - 自强学堂"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/mindmb/article/details/7898528",
    //             "name": "编码问题"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/52703.htm",
    //             "name": "dict,set,list,tuple应用详解_python_脚本之家"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/zhangxinrun/article/details/8095118/",
    //             "name": "Django模板系统(非常详细) - zhangxinrun的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://python.usyiyi.cn/django_182/ref/templates/language.html",
    //             "name": "Django 模板语言 — Django 1.8.2 中文文档"
    //         },
    //         {
    //             "url": "http://python.usyiyi.cn/django_182/ref/templates/builtins.html#ref-templates-builtins-filters",
    //             "name": "内建的模板标签和过滤器 — Django 1.8.2 中文文档"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/linwhwylb/article/details/6436903",
    //             "name": "Python GUI编程各种实现的对比 - forgetfulness的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/kaituorensheng/p/3287652.html",
    //             "name": "pyhon之Tkinter实例化学习 - jihite - 博客园"
    //         },
    //         {
    //             "url": "http://www.yiibai.com/python/python_tk_button.html",
    //             "name": "Python - Tkinter Button"
    //         },
    //         {
    //             "url": "http://wiki.jikexueyuan.com/project/python-crawler-guide/",
    //             "name": "Python爬虫学习系列教程_Python开发中文手册[PDF]下载-极客学院Wiki"
    //         },
    //         {
    //             "url": "http://cuiqingcai.com/1052.html",
    //             "name": "Python爬虫学习系列教程 | 静觅"
    //         },
    //         {
    //             "url": "http://www.oschina.net/news/57468/best-python-ide-for-developers",
    //             "name": "提供给开发者 10 款最好的 Python IDE - 开源中国社区"
    //         },
    //         {
    //             "url": "http://python.jobbole.com/84600/",
    //             "name": "爬虫技术:(JavaScript渲染)动态页面抓取超级指南"
    //         },
    //         {
    //             "url": "http://django-redis-chs.readthedocs.io/zh_CN/latest/#",
    //             "name": "Django-Redis 4.7.0 文档"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/dplearning/p/5860297.html",
    //             "name": "time,datetime,string相互转换"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/chosen0ne/article/details/7319306",
    //             "name": "Python日志输出——logging模块"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/fnng/p/3670789.html",
    //             "name": "python 多线程就这么简单"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/luxiaoxun/p/3918054.html",
    //             "name": "RabbitMQ的几种典型使用场景"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/-Doraemon/p/4700063.html",
    //             "name": "Master-Worker模式 Python"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/linsongbin1/article/details/47781187",
    //             "name": "RabbitMq、ActiveMq、ZeroMq、kafka之间的比较"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/xuyatao/p/6864109.html",
    //             "name": "转：为什么会需要消息队列(MQ)？"
    //         },
    //         {
    //             "url": "http://www.ywnds.com/?p=5791",
    //             "name": "为什么需要消息队列，及使用消息队列的好处？"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/aylin/p/5572104.html",
    //             "name": "python之socket编程"
    //         },
    //         {
    //             "url": "http://www.codegood.com/downloads",
    //             "name": "mysql插件下载"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/shizhengwen/p/6911043.html",
    //             "name": "Celery 分布式任务队列快速入门"
    //         },
    //         {
    //             "url": "http://www.mamicode.com/info-detail-1034694.html",
    //             "name": "Unicode代码点与编码方式"
    //         },
    //         {
    //             "url": "http://pycoders-weekly-chinese.readthedocs.io/en/latest/issue5/unipain.html",
    //             "name": "Unicode之痛 — PyCoder&#39;s Weelky CN"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/xiaozi/p/6182990.html",
    //             "name": "python线程池（threadpool）模块使用笔记"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/u010388497/article/details/51809152",
    //             "name": "代码设计 六大原则 - CSDN博客"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/Liqiongyu/p/5916710.html",
    //             "name": "二十三种设计模式及其python实现 - 李琼羽 - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/wuyuegb2312/archive/2013/04/09/3008320.html",
    //             "name": "《大话设计模式》Python版代码实现 - 五岳 - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/fangyuan1004/p/4539148.html",
    //             "name": "Django搭建及源码分析(二) - 37℃程序&#39;媛&#39; - 博客园"
    //         }
    //     ],
    //     "study": [
    //         {
    //             "url": "http://www.cnblogs.com/sunada2005/p/3411873.html",
    //             "name": "常用SQL查询语句"
    //         },
    //         {
    //             "url": "https://zh.wikipedia.org/wiki/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F",
    //             "name": "TCP/IP协议族 - 维基百科，自由的百科全书"
    //         },
    //         {
    //             "url": "http://my.csdn.net/",
    //             "name": "我的CSDN"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_4cc16fc50100imqh.html",
    //             "name": "SNAT DNAT_chuansir_新浪博客"
    //         },
    //         {
    //             "url": "https://hdcmct.org/torrents.php?cat410=1&cat411=1&cat412=1&cat413=1&cat414=1&cat404=1&cat405=1&incldead=1&spstate=0&pick=0&inclbookmarked=0&search=%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E5%A4%A7%E7%94%B5%E5%BD%B1&search_area=0&search_mode=0",
    //             "name": "CMCT-PT :: 搜索结果 - 爸爸去哪儿大电影 :: CMCT高清影视乐园PT站 - Powered by NexusPHP"
    //         },
    //         {
    //             "url": "http://bbs.tianya.cn/post-it-396561-1.shtml",
    //             "name": "[网络天地]dos下的一些小技巧 菜鸟的来 高手免入（每日更新）_电脑网络_天涯论坛"
    //         },
    //         {
    //             "url": "http://www.docin.com/p-70657869.html",
    //             "name": "基于IPv6的Web服务器的构建 - 豆丁网"
    //         },
    //         {
    //             "url": "http://www.docin.com/p-233328164.html#documentinfo",
    //             "name": "RHEL4下配置LVS实现Web服务器负载平衡 - 豆丁网"
    //         },
    //         {
    //             "url": "http://www.ietf.org/",
    //             "name": "Internet Engineering Task Force (IETF)"
    //         },
    //         {
    //             "url": "http://bbs.hh010.com/",
    //             "name": "鸿鹄论坛-CCNA,思科华为,思科论坛,CCNA题库,CCNA考试,CCNP题库,CCIE培训,思科认证,华为认证 - 思科华为技术社区"
    //         },
    //         {
    //             "url": "http://www.w3cschool.cc/aspnet/aspnet-tutorial.html",
    //             "name": "ASP.NET 教程 | w3cschool菜鸟教程"
    //         },
    //         {
    //             "url": "http://baike.baidu.com/link?url=jxTa-BuIb6QtlrsXnMXNQKKYOdGn7sQ7Zc8_hK1pKS6RSiK2fCJmRhnDJgOury1yrnrPuN0JWryNP5L9dMXNxa",
    //             "name": "netfilter_百度百科"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/qixuejia/p/4190755.html",
    //             "name": "CSS颜色代码大全 - Cat Qi - 博客园"
    //         },
    //         {
    //             "url": "http://192.168.60.10:8080/secure/Dashboard.jspa",
    //             "name": "System Dashboard - Netentsec-ICG Team"
    //         },
    //         {
    //             "url": "http://www.baidu.com/p/tigerlei010?from=wenku",
    //             "name": "tigerlei010的百度个人主页"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-12109301-id-2958185.html",
    //             "name": "正则表达式参考 TCL语言版收藏-niustar-ChinaUnix博客"
    //         },
    //         {
    //             "url": "http://wenku.baidu.com/link?url=D6VwIcvzHzG2KCst1QD6q0_QLqOxKwKk-V8WWD1TWKtndnqOkvojPcsG4W9Ad61VEG-4-s0FXQwJzRTYuHzUZ2l_r00vMi-LDJFlz2hDkSm",
    //             "name": "用Xlight搭建IPv6的FTP服务器_百度文库"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/tsingke/article/details/6336516",
    //             "name": "网络中数据传输过程的解析 - TsingKe - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_4e5e815e01009ff0.html",
    //             "name": "iptables的conntrack记录_仙剑_新浪博客"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/aspx-net/p/3554044.html",
    //             "name": "SNMP监控一些常用OID的总结 - 斌斌NO1 - 博客园"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/way_testlife/archive/2011/04/03/2004877.html",
    //             "name": "转：软件测试 从零开始 - oyzway - 博客园"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/huangxy10/article/details/8012180",
    //             "name": "TCP三次握手/四次挥手 及 状态变迁图 - huangxy10的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.jellythink.com/archives/705",
    //             "name": "简析TCP的三次握手与四次分手 | 果冻想"
    //         },
    //         {
    //             "url": "http://wenku.baidu.com/link?url=jDYhN5GnjAQnygJdnLs_Wia9Ypk2zdvDXHwEMuJ_9UCIJlpWOFVgkAYMLVKOLmeulP_R1mhIbOGDcJiYh-MHN5PpcC27TwopIgVDw6nhNE3",
    //             "name": "IPv6(ftp&amp;http)服务器搭建指南_百度文库"
    //         },
    //         {
    //             "url": "http://www.ipv6home.cn/soft/",
    //             "name": "IPv6软件站"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/articlelist_1262231445_0_1.html",
    //             "name": "博文___one_day___新浪博客"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-20788636-id-1841424.html",
    //             "name": "数据在网络中的发送流程-frankzfz-ChinaUnix博客"
    //         },
    //         {
    //             "url": "http://baike.baidu.com/link?url=vp8NMDqJpksgygZB7t4optfERHc6c7PEwnJ7QBYD8TnBSYEc8xNQOCccrpb3BFooi_e4LK6KU00uYPW7kBQ6Ra",
    //             "name": "nat_百度百科"
    //         },
    //         {
    //             "url": "http://www.open-open.com/doc/list/299",
    //             "name": "Tcl/Tk开发_全部文档 - OPEN开源文档"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/clearwater21cn/article/details/1667614",
    //             "name": "Snmp学习笔记 - 下一道彩虹 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.chinaunix.net/old_jh/23/408225.html",
    //             "name": "[精华] 跟我一起写 Makefile - ChinaUnix.net"
    //         },
    //         {
    //             "url": "http://wenku.baidu.com/view/f52a0879453610661ed9f465.html?qq-pf-to=pcqq.c2c",
    //             "name": "【网康进阶之ICG】-07-设备部署-HA配置_百度文库"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-20393955-id-345524.html",
    //             "name": "《TCL 教程英文版》 笔记 §16变量作用域－global and upvar-oychw-ChinaUnix博客"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/ylhome/archive/2009/07/30/1535320.html",
    //             "name": "Tcl/Tk详解-eval - ylclass - 博客园"
    //         },
    //         {
    //             "url": "http://wenku.baidu.com/link?url=y7ghhiX5AE7PhKCRZlfyUc2dUaOSvSvlbXlx-vKYu4TaYk9FNh40hrS96ebhxch9-g-7qoifIty9wB8sOHakqZVcttgJjPeQNHaImb1FGdS",
    //             "name": "防火墙TFTP协议处理流程及TFTP ALG应用_百度文库"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/yaopeng_2005/article/details/7064869",
    //             "name": "OSI七层模型详解 - - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.php100.com/manual/PostgreSQL8/app-psql.html",
    //             "name": "psql PostgreSQL 手册"
    //         },
    //         {
    //             "url": "http://www.2cto.com/Article/201307/231256.html",
    //             "name": "IP欺骗攻击以及工具介绍 - 软件工具 - 红黑联盟"
    //         },
    //         {
    //             "url": "https://en.wikipedia.org/wiki/Wiki",
    //             "name": "维基百科"
    //         },
    //         {
    //             "url": "http://www.itechzero.com/google-mirror-sites-collect.html",
    //             "name": "Google 镜像站搜集 - Techzero"
    //         },
    //         {
    //             "url": "http://forum.cnsec.org/thread-85009-1-1.html",
    //             "name": "nmap的高级用法与典型场景 - Web安全 { Web Safety } - 暗安全(暗组) - Powered by Discuz!"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/bill_lee_sh_cn/article/details/1818312",
    //             "name": "网络测试工具tomahawk之一 安装篇 - 行百里路者半九十 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://tomahawk.sourceforge.net/TUTORIAL.html",
    //             "name": "file:///C:/WINNT/Profiles/bsmith/Desktop/tomahawk/TUTORIAL.txt"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/zifang888/archive/2013/11/28/3447098.html",
    //             "name": "tcpreplay,tcprewrite的使用---张子芳 - 张子芳 - 博客园"
    //         },
    //         {
    //             "url": "http://netsecurity.51cto.com/art/200512/13221.htm",
    //             "name": "专题：Sniffer安全技术从入门到精通_51CTO.COM - 技术成就梦想 - 中国领先的IT技术网站"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/jaazure/article/details/5841969",
    //             "name": "网络编程--对IP UDP 校验和的理解 - jaazure的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.360doc.com/content/12/0223/20/8477600_189108612.shtml",
    //             "name": "TcpReplay使用方法"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/xinus/p/centos_vpnc_conf.html",
    //             "name": "Centos系统使用vpnc连接cisco的vpn服务 - 心有思 - 博客园"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-26495963-id-3279216.html",
    //             "name": "iptables详解--ChinaUnix博客"
    //         },
    //         {
    //             "url": "http://www.linuxso.com/linuxpeixun/10332.html",
    //             "name": "netfilter/iptables全攻略 - Linux安全网 - Linux操作系统_Linux 命令_Linux教程_Linux黑客"
    //         },
    //         {
    //             "url": "http://www.pchifi.cn/forum.php?mod=viewthread&tid=102075",
    //             "name": "简单IRQ教程：提高USB接口设备中断优先级 - PCHIFI软件应用类 - WWW.PCHIFI.CN － 电脑音频发烧站 - Powered by Discuz!"
    //         },
    //         {
    //             "url": "http://colobu.com/2014/08/15/android-components-collection/",
    //             "name": "最流行的android组件大全 | 鸟窝"
    //         },
    //         {
    //             "url": "http://bbs.itheima.com/thread-224764-1-1.html",
    //             "name": "【黑马就业部出品】—全课程视频同步笔记-Android-黑马程序员IT技术论坛 - Powered by Discuz!"
    //         },
    //         {
    //             "url": "http://www.tuicool.com/articles/A7z2ie",
    //             "name": "Android Json解析与总结 - 推酷"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_5e5cad850100c9nu.html",
    //             "name": "(1)autoit 2~运行程序或打开文件_偲LUo合_新浪博客"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/windone0109/article/category/479067",
    //             "name": "bat - 相信自己能行，那就一定能行 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_7515575a0100qm3b.html",
    //             "name": "通过vSphere Client配置网络和虚拟交换机_lynn_新浪博客"
    //         },
    //         {
    //             "url": "http://www.doc88.com/p-57786499693.html",
    //             "name": "戴尔6200交换机中文安装指南 - 综合课件 - 道客巴巴"
    //         }
    //     ],
    //     "工具使用教程": [
    //         {
    //             "url": "http://www.freebuf.com/sectool/2079.html",
    //             "name": "Burp Suite详细使用教程"
    //         },
    //         {
    //             "url": "http://hackersec.blog.51cto.com/622295/1251632",
    //             "name": "SQL注入之DVWA平台测试mysql注入 - 信息安全圈 - 51CTO技术博客"
    //         }
    //     ],
    //     "XSS平台": [
    //         {
    //             "url": "http://xssa.me/xss.php",
    //             "name": "XSS Platform"
    //         },
    //         {
    //             "url": "http://navisec.it/",
    //             "name": "网络安全网址总汇"
    //         },
    //         {
    //             "url": "https://www.zhihu.com/question/21606800/answer/22268855",
    //             "name": "零基础如何学习 Web 安全"
    //         },
    //         {
    //             "url": "http://blog.knownsec.com/Knownsec_RD_Checklist/#FMID_1218170279FM",
    //             "name": "黑客技能表"
    //         },
    //         {
    //             "url": "http://www.freebuf.com/articles/web/7359.html#",
    //             "name": "黑客是怎样入侵你的网站的 - FreeBuf.COM | 关注黑客与极客"
    //         },
    //         {
    //             "url": "https://www.zhihu.com/question/20607351/answer/16428402",
    //             "name": "黑客如何学起？ - 任晓珲的回答 - 知乎"
    //         },
    //         {
    //             "url": "https://www.zhihu.com/question/48186685",
    //             "name": "关于web渗透，如何才能迈出关键的一步？ - 网络安全 - 知乎"
    //         },
    //         {
    //             "url": "http://www.2cto.com/article/201204/127836.html",
    //             "name": "一次艰难的渗透纪实 - 网站安全 - 红黑联盟"
    //         },
    //         {
    //             "url": "https://zhuanlan.zhihu.com/p/21573498",
    //             "name": "内网漫游与知乎某问题引发的经验之谈 - 黑客生活 - 知乎专栏"
    //         },
    //         {
    //             "url": "http://www.52pojie.cn/thread-303339-1-1.html",
    //             "name": "BackTrack5圈内非常著名的黑客攻击平台（各种版本） - 『精品软件区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|破解软件|www.52pojie.cn"
    //         },
    //         {
    //             "url": "http://www.kali.org.cn/forum.php?mod=viewthread&tid=17944&extra=page%3D1%26filter%3Dtypeid%26typeid%3D32",
    //             "name": "我是如何截取HTTP与HTTPS并成功得到密码 - Kali中文网"
    //         },
    //         {
    //             "url": "https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/50.html",
    //             "name": "第9章　无线网络渗透测试 | 大学霸 Kali Linux 安全渗透教程"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-28216282-id-3757849.html",
    //             "name": "DNS解析过程详解-windakcity-ChinaUnix博客"
    //         },
    //         {
    //             "url": "http://www.rfc-editor.org/search/rfc_search.php",
    //             "name": "RFC Search"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-25266990-id-2419446.html",
    //             "name": "黑客利器——中国菜刀-鸟哥のlinux-ChinaUnix博客"
    //         },
    //         {
    //             "url": "https://www.secpulse.com/archives/55634.html",
    //             "name": "小白如何学习挖掘漏洞 | 滴滴DSRC课程第一期 - SecPulse.COM | 安全脉搏"
    //         },
    //         {
    //             "url": "http://www.jinglingshu.org/?p=8231",
    //             "name": "对居然之家的一次超详细内网渗透 – jinglingshu的博客"
    //         },
    //         {
    //             "url": "http://www.2cto.com/article/201304/202145.html",
    //             "name": "彩虹表完全参考手册 - 加密解密"
    //         },
    //         {
    //             "url": "http://www.myhack58.com/Article/html/3/7/2013/37879.htm",
    //             "name": "通过注入点判断什么数据库类型"
    //         },
    //         {
    //             "url": "http://www.jb51.net/hack/41493.html",
    //             "name": "PHP+MySQL手工注入语句大全 MySQL手工注入语句总结"
    //         },
    //         {
    //             "url": "https://hac-ker.net/",
    //             "name": "被黑站点统计-wooyun"
    //         }
    //     ],
    //     "网络": [
    //         {
    //             "url": "http://network.51cto.com/art/201409/450885_all.htm",
    //             "name": "小白都能看明白的VLAN原理解释"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/linjiaxin/p/6476480.html",
    //             "name": "Vmware虚拟机三种网络模式详解"
    //         },
    //         {
    //             "url": "http://translate.google.cn/",
    //             "name": "Google 翻译"
    //         },
    //         {
    //             "url": "http://www.chongbuluo.com/",
    //             "name": "虫部落 — 让搜索更简单"
    //         },
    //         {
    //             "url": "http://www.panc.cc/",
    //             "name": "网盘搜索"
    //         },
    //         {
    //             "url": "http://www.3dmgame.com/gl/201509/3523558_11.html",
    //             "name": "NBA2K16 图文教程攻略 游戏系统全解析_三、全动作指令表：基础花式_www.3dmgame.com"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/gaowenhui2008/article/details/53672617",
    //             "name": "AngularJS开发环境搭建，出hello word"
    //         },
    //         {
    //             "url": "https://codex.wordpress.org/zh-cn:Main_Page",
    //             "name": "zh-cn:WordPress 官方中文文档"
    //         },
    //         {
    //             "url": "http://www.k73.com/ps4/114930.html",
    //             "name": "NBA2K16图文攻略 动作指令/技能战术全解_k73电玩之家"
    //         },
    //         {
    //             "url": "http://www.xazfgjj.gov.cn/xxgk_page.jsp?urltype=news.NewsContentUrl&wbtreeid=1059&wbnewsid=4924",
    //             "name": "中心关于个人住房公积金贷款楼盘项目备案有关事项的通知-西安住房公积金管理中心"
    //         }
    //     ],
    //     "论坛": [
    //         {
    //             "url": "http://bbs.sssie.com/",
    //             "name": "SSS安全论坛"
    //         },
    //         {
    //             "url": "http://www.moonsec.com/",
    //             "name": "暗月"
    //         },
    //         {
    //             "url": "http://www.dute360.com/forum.php",
    //             "name": "独特论坛"
    //         },
    //         {
    //             "url": "http://www.0daybank.org/",
    //             "name": "漏洞银行"
    //         },
    //         {
    //             "url": "https://buluo.qq.com/p/barindex.html?bid=22097&from=grp_sub_obj",
    //             "name": "渗透测试部落"
    //         },
    //         {
    //             "url": "https://www.t00ls.net/?navisec.it",
    //             "name": "T00LS"
    //         },
    //         {
    //             "url": "http://www.kali.org.cn/",
    //             "name": "Kali Linux论坛"
    //         },
    //         {
    //             "url": "https://www.vulbox.com/",
    //             "name": "漏洞盒子"
    //         },
    //         {
    //             "url": "http://www.51cto.com/",
    //             "name": "51CTO.COM"
    //         },
    //         {
    //             "url": "http://www.ichunqiu.com/",
    //             "name": "i春秋"
    //         },
    //         {
    //             "url": "http://www.freebuf.com/",
    //             "name": "FreeBuf.COM"
    //         },
    //         {
    //             "url": "https://www.secpulse.com/",
    //             "name": "安全脉搏"
    //         },
    //         {
    //             "url": "http://www.caidaomei.com/",
    //             "name": "中国菜刀官网-功夫再高 也怕菜刀"
    //         },
    //         {
    //             "url": "https://www.unhonker.com/",
    //             "name": "90&#39; s Blog"
    //         },
    //         {
    //             "url": "https://www.70sec.com/",
    //             "name": "70sec"
    //         },
    //         {
    //             "url": "https://www.nosafe.org/forum.php",
    //             "name": "NoSafe"
    //         },
    //         {
    //             "url": "http://www.zygx8.com/",
    //             "name": "资源共享吧"
    //         },
    //         {
    //             "url": "http://www.jinglingshu.org/",
    //             "name": "jinglingshu的博客"
    //         },
    //         {
    //             "url": "http://www.moonsafe.com/forum.php",
    //             "name": "暗月信息安全论坛"
    //         },
    //         {
    //             "url": "http://www.hegouvip.com/",
    //             "name": "合购VIP资源论坛"
    //         },
    //         {
    //             "url": "https://w00yun.top/",
    //             "name": "乌云镜像1"
    //         },
    //         {
    //             "url": "http://wooyun.96php.cn/",
    //             "name": "乌云镜像2"
    //         },
    //         {
    //             "url": "http://wooyun.jozxing.cc/",
    //             "name": "乌云镜像3"
    //         },
    //         {
    //             "url": "https://www.sgzsec.com/",
    //             "name": "潇水一飞"
    //         },
    //         {
    //             "url": "http://nav.mayter.cn/",
    //             "name": "Websec-网络安全导航"
    //         },
    //         {
    //             "url": "http://wiki.secbug.net/",
    //             "name": "WooYun WiKi "
    //         },
    //         {
    //             "url": "http://zone.secbug.net/zone/index.html",
    //             "name": "WooYun(白帽子技术社区)"
    //         },
    //         {
    //             "url": "http://www.mayter.cn/",
    //             "name": "Mayter&#39;S 关注Web安全 "
    //         },
    //         {
    //             "url": "http://www.vipread.com/index",
    //             "name": "信息安全技术文档分享平台"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/test404/",
    //             "name": "代码青春"
    //         },
    //         {
    //             "url": "https://www.waitalone.cn/",
    //             "name": "独自等待"
    //         },
    //         {
    //             "url": "http://qqhack8.blog.163.com/blog/static/11414798520165190729884/",
    //             "name": "K8拉登哥哥的日志"
    //         },
    //         {
    //             "url": "http://toutiao.secjia.com/",
    //             "name": "安全头条-安全加社区"
    //         },
    //         {
    //             "url": "http://www.mahaixiang.cn/seoyjy/880.html",
    //             "name": "黑帽SEO"
    //         },
    //         {
    //             "url": "http://rcoil.me/",
    //             "name": "RcoIl的窝"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/caiqiiqi/article/category/6409223",
    //             "name": "安全 - caiqiiqi的博客 - CSDN博客"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/fovwin/article/details/9102731",
    //             "name": "Sublime Text 2 快捷键"
    //         }
    //     ],
    //     "工作": [
    //         {
    //             "url": "http://192.168.255.130/login.jsp;jsessionid=26CD2DDF1DCFB7A3F184595104DC4694",
    //             "name": "登录EKP系统"
    //         },
    //         {
    //             "url": "http://192.168.1.121/",
    //             "name": "青铜器RDM研发管理平台"
    //         },
    //         {
    //             "url": "http://192.168.11.253/index.php",
    //             "name": "TestLink 1.8.5"
    //         },
    //         {
    //             "url": "http://192.168.11.118/index.php?caller=login",
    //             "name": "TestLink 1.9.10"
    //         },
    //         {
    //             "url": "http://192.168.11.251/index.cgi",
    //             "name": "Bugzilla"
    //         },
    //         {
    //             "url": "http://192.168.255.130/km/doc/index.jsp#cri.q=docStatus:30",
    //             "name": "知识中心"
    //         },
    //         {
    //             "url": "http://blog.nsfocus.net/",
    //             "name": "绿盟科技博客"
    //         },
    //         {
    //             "url": "https://tower.im/teams/e5cc2f2acd974ddfb21f644a8c99350d/projects/",
    //             "name": "saas的项目 - Tower"
    //         },
    //         {
    //             "url": "https://passport.guanaitong.com/index.php?wxA=Default.login",
    //             "name": "福利"
    //         },
    //         {
    //             "url": "http://bbs.intra.nsfocus.com/forums/",
    //             "name": "绿盟科技 - 论坛"
    //         },
    //         {
    //             "url": "http://university.intra.nsfocus.com/training_class.html",
    //             "name": "绿盟科技大学"
    //         },
    //         {
    //             "url": "http://192.168.1.39/WebExam/Home/Default.aspx",
    //             "name": "通用培训系统"
    //         },
    //         {
    //             "url": "http://webmeet.263.net/",
    //             "name": "263企业会议-网络会议登入"
    //         },
    //         {
    //             "url": "https://nsctf.intra.nsfocus.com/",
    //             "name": "F2E - NSCTF技术交流社区"
    //         },
    //         {
    //             "url": "http://10.65.99.99/",
    //             "name": "图书馆"
    //         },
    //         {
    //             "url": "http://oa.nsfocus.com/km/address/commonSupport.jsp",
    //             "name": "各种接口人"
    //         },
    //         {
    //             "url": "http://bank.lab.intra.nsfocus.com/share/s/l4z5PUz2Rn-AgHh58FbeHQ",
    //             "name": "绿盟云模块负责人.xlsx"
    //         },
    //         {
    //             "url": "https://hdbn.fs.ap1.oraclecloud.com/homePage/faces/FuseWelcome?_adf.no-new-window-redirect=true&_adf.ctrl-state=170p0jkhse_5&_afrLoop=481611327351265&_afrWindowMode=2&_afrWindowId=pb1qym6pu",
    //             "name": "EHR系统"
    //         },
    //         {
    //             "url": "http://10.5.32.7/api/nuri/tembin/doc/interface/",
    //             "name": "运维门户api"
    //         },
    //         {
    //             "url": "http://10.5.24.103/",
    //             "name": "绿盟云&amp;银河自助文档系统"
    //         },
    //         {
    //             "url": "http://www.intra.nsfocus.com/PerformanceManagement/2011/Forms/AllItems.aspx?RootFolder=http%3a%2f%2fwww%2eintra%2ensfocus%2ecom%2fPerformanceManagement%2f2011%2f%e5%85%ac%e5%8f%b8%e6%95%b4%e4%bd%93%2f%e4%ba%a7%e5%93%81%e7%ba%bf%2f%e5%ae%89%e5%85%a8%e5%b9%b3%e5%8f%b0%e4%b8%ad%e5%bf%83%2fROS%e4%ba%a7%e5%93%81%e9%83%a8%2fROS%e6%8a%80%e6%9c%af%e5%9b%a2%e9%98%9f%2fCSG%e7%bb%84%2f%e6%9b%b9%e5%b8%85&FolderCTID=0x012000C0A247F529A7054081EBB7461E43D3A4",
    //             "name": "绩效"
    //         },
    //         {
    //             "url": "http://neitui.zhiye.com/nsfocus#vertify%2Fwechat",
    //             "name": "内部推荐"
    //         },
    //         {
    //             "url": "http://cc.263.net/homePage.action",
    //             "name": "263企业会议"
    //         },
    //         {
    //             "url": "https://192.168.5.246/",
    //             "name": "svn代码账号密码修改"
    //         }
    //     ],
    //     "elasticsearch": [
    //         {
    //             "url": "http://www.cnblogs.com/dplearning/p/5975158.html",
    //             "name": "【elasticsearch】python下的使用"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/63731.htm",
    //             "name": "使用Python操作Elasticsearch数据索引的教程_python"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/letong/p/4749234.html",
    //             "name": "Python Elasticsearch api"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/xing901022/archive/2016/03/16/5284902.html",
    //             "name": "Elasticsearch——分页查询From&amp;Size VS scroll"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/u012450329/article/details/52692628",
    //             "name": "Elasticsearch Scroll (游标)API详解 - Terry 的博客 - CSDN博客"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/dm_vincent/article/category/2718099",
    //             "name": "Elasticsearch专栏"
    //         }
    //     ],
    //     "测试资料": [
    //         {
    //             "url": "http://www.cppblog.com/fwxjj/archive/2012/10/04/192809.html",
    //             "name": "使用email-ext替换Jenkins(Hudson)的默认邮件通知 --- 转 - 大龙的博客 - C++博客"
    //         },
    //         {
    //             "url": "http://jdonee.iteye.com/blog/315589",
    //             "name": "使用Hudson进行持续集成(九) - jdonee - ITeye技术网站"
    //         },
    //         {
    //             "url": "https://wiki.jenkins-ci.org/display/JENKINS/Email-ext+plugin",
    //             "name": "Email-ext plugin - Jenkins - Jenkins Wiki"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/hwhua1986/article/details/47975257",
    //             "name": "Jenkins里邮件触发器配置Send to Developers - 测试蜗牛，一步一个脚印 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/GGHHLL/p/jenkins.html",
    //             "name": "[原创] Jenkins 邮件配置 (使用 Jenkins Email Extension Plugin) - H@H@ - 博客园"
    //         },
    //         {
    //             "url": "http://www.360doc.com/content/14/0508/19/10058718_375884734.shtml",
    //             "name": "Jenkins环境配置"
    //         },
    //         {
    //             "url": "http://www.open-open.com/lib/view/open1411872021421.html",
    //             "name": "Jenkins安装与配置 - OPEN 开发经验库"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/wangmuming/article/details/22925127",
    //             "name": "Jenkins入门系列之——02第二章 Jenkins安装与配置 - - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/anlegor/article/details/24067317",
    //             "name": "jenkins集群测试环境原理、部署及常见问题解决 - 浟测漏湤 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/wangmuming/article/details/22924815",
    //             "name": "Jenkins入门系列之——01第一章 Jenkins是什么？ - - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_670bfea20102vmkh.html",
    //             "name": "解决Jenkins+webdriver不启动浏览器的问题_哈哈_新浪博客"
    //         },
    //         {
    //             "url": "http://10.201.23.87:8087/jenkins/",
    //             "name": "Dashboard [Jenkins]"
    //         }
    //     ],
    //     "Linux": [
    //         {
    //             "url": "http://www.linuxidc.com/Linux/2013-07/88031.htm",
    //             "name": "shell脚本应用及循环语句_Linux编程_Linux公社-Linux系统门户网站"
    //         },
    //         {
    //             "url": "http://bbs.chinaunix.net/forum.php?mod=viewthread&tid=15788",
    //             "name": "eval用法三例,与大家分享,很有用o !-Shell-ChinaUnix.net"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/qinyushuang/article/details/44115531",
    //             "name": "shell用变量的值作为新的变量名 - qinyushuang的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/sxzlc/article/details/7544465",
    //             "name": "shell中变量的引用（两种方式：$变量名，${变量名}）。 - sunxuezhi322 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.linuxidc.com/Linux/2012-02/54474.htm",
    //             "name": "Shell 循环语句用法小结_Linux编程_Linux公社-Linux系统门户网站"
    //         },
    //         {
    //             "url": "http://www.linuxidc.com/Linux/2012-02/54385.htm",
    //             "name": "Shell case语句用法小结_Linux教程_Linux公社-Linux系统门户网站"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/tolys/article/details/1807523",
    //             "name": "正则表达式awk - 上善若水.class - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://blog.sina.com.cn/s/blog_6151984a0100ekl6.html",
    //             "name": "shell编程——if语句_macg_新浪博客"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/include/archive/2011/12/09/2307905.html",
    //             "name": "shell中if条件字符串、数字比对，[[ ]]和[ ]区别 - 天晴如许 - 博客园"
    //         },
    //         {
    //             "url": "http://www.jquerycn.cn/a_8354",
    //             "name": "bash shell脚本执行的几种方法"
    //         },
    //         {
    //             "url": "http://www.tuicool.com/articles/6VJzI3v",
    //             "name": "Linux: grep多个关键字“与”和“或” - 推酷"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html",
    //             "name": "Linux tcpdump命令详解 - ggjucheng - 博客园"
    //         },
    //         {
    //             "url": "http://os.51cto.com/art/201101/244090.htm",
    //             "name": "如何在Linux中查看所有正在运行的进程 - 51CTO.COM"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/vicowong/archive/2011/04/23/2025545.html",
    //             "name": "CentOS 6 网络设置修改 指定IP地址 DNS 网关（实测 笔记） - vicowong - 博客园"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-25266990-id-2129571.html",
    //             "name": "什么是网络管理、SNMP做什么-鸟哥のlinux-ChinaUnix博客"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/andy572633/article/details/7211546",
    //             "name": "linux下杀死进程（kill）的N种方法 - andy572633的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.2cto.com/os/201207/140483.html",
    //             "name": "Linux搭建ipv6 ftp服务器 - Linux操作系统：Ubuntu_Centos_Debian - 红黑联盟"
    //         },
    //         {
    //             "url": "http://www.91linux.com/html/linux_program/Tcl/",
    //             "name": "Linux编程开发Tcl - 开源中文网"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/peida/archive/2012/12/13/2815687.html",
    //             "name": "每天一个linux命令（37）：date命令 - peida - 博客园"
    //         },
    //         {
    //             "url": "http://jingyan.baidu.com/album/066074d64b303ac3c21cb0ef.html?picindex=1",
    //             "name": "如何在CentOS系统中安装配置SNMP服务_互联网_百度经验"
    //         },
    //         {
    //             "url": "http://blog.chinaunix.net/uid-23069658-id-3160506.html",
    //             "name": "(一)洞悉linux下的Netfilter&amp;iptables：什么是Netfilter？-wjlkoorey258-ChinaUnix博客"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/godleading/article/details/19972253",
    //             "name": "Linux nf_conntrack连接跟踪的实现 - godleading的专栏 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://www.jb51.net/LINUXjishu/141567.html",
    //             "name": "Linux下必须知道的11个网络命令 _LINUX_操作系统_脚本之家"
    //         },
    //         {
    //             "url": "http://blog.csdn.net/cazicaquw/article/details/7376026",
    //             "name": "linux下开源sip server : opensips 的安装+配置 +使用 - 小脸龙的老巢 - 博客频道 - CSDN.NET"
    //         },
    //         {
    //             "url": "http://c.biancheng.net/cpp/view/7011.html",
    //             "name": "Shell函数：Shell函数返回值、删除函数、在终端调用函数_Shell中文网"
    //         },
    //         {
    //             "url": "http://www.jb51.net/article/50647.htm",
    //             "name": "Shell脚本获取进程的运行时间_linux shell_脚本之家"
    //         },
    //         {
    //             "url": "http://coolshell.cn/articles/5426.html",
    //             "name": "简明 Vim 练级攻略"
    //         },
    //         {
    //             "url": "http://os.51cto.com/art/201408/449273.htm",
    //             "name": "Windows与Linux文件系统互访的几种方法 - 51CTO.COM"
    //         },
    //         {
    //             "url": "http://www.centoscn.com/CentosBug/softbug/2016/0115/6660.html",
    //             "name": "解决CentOS7 无法启动mysql 的解决办法"
    //         },
    //         {
    //             "url": "https://linux.cn/article-2434-1.html",
    //             "name": "netstat 的10个基本用法"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/ccorz/p/5523297.html",
    //             "name": "教你如何在linux上装逼，shell中颜色的设置"
    //         }
    //     ],
    //     "业务知识": [
    //         {
    //             "url": "http://10.200.20.21:9001/Product_helper/new_pamc_helper_workflow/",
    //             "name": "产品业务流程介绍 - Ros技术支持 v 1.0"
    //         }
    //     ],
    //     "网站开发": [
    //         {
    //             "url": "http://tool.oschina.net/",
    //             "name": "常用在线工具 —— 开源中国社区"
    //         },
    //         {
    //             "url": "http://python.usyiyi.cn/django/topics/db/managers.html",
    //             "name": "Django 文档 — Django 1.8.2 中文文档"
    //         },
    //         {
    //             "url": "http://www.cnblogs.com/itfly8/category/756114.html",
    //             "name": "大型分布式网站架构"
    //         },
    //         {
    //             "url": "http://javascript.ruanyifeng.com/",
    //             "name": "JavaScript 标准参考教程（alpha）"
    //         },
    //         {
    //             "url": "http://v3.bootcss.com/",
    //             "name": "Bootstrap 中文文档 · Bootstrap 是世界上最流行的、移动设备优先的、响应式前端开发框架。"
    //         }
    //     ],
    //     "常用工具": [
    //         {
    //             "url": "http://www.jeasyuicn.com/cron/",
    //             "name": "Cron 生成工具"
    //         },
    //         {
    //             "url": "http://deerchao.net/tutorials/regex/regex.htm",
    //             "name": "正则表达式30分钟入门教程"
    //         },
    //         {
    //             "url": "https://cn.uptodown.com/",
    //             "name": "各种平台软件下载"
    //         },
    //         {
    //             "url": "http://tool.chinaz.com/Tools/Unicode.aspx",
    //             "name": "Unicode编码转换 - 站长工具"
    //         },
    //         {
    //             "url": "http://ascii.911cha.com/",
    //             "name": "ASCII编码查询"
    //         },
    //         {
    //             "url": "http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html",
    //             "name": "字符编码笔记：ASCII，Unicode和UTF-8 - 阮一峰的网络日志"
    //         },
    //         {
    //             "url": "http://www.msup.com.cn/course/11418",
    //             "name": "在线学习网站"
    //         },
    //         {
    //             "url": "http://tool.oschina.net/encrypt",
    //             "name": "在线加密解密"
    //         },
    //         {
    //             "url": "http://www.sojson.com/encrypt_rabbit.html",
    //             "name": "在线Rabbit加密 | Rabbit解密- 在线工具"
    //         },
    //         {
    //             "url": "http://www.iyunv.com/thread-135490-1-1.html",
    //             "name": "收集可用谷歌(google)镜像站点代理网站（每周一更新）"
    //         },
    //         {
    //             "url": "http://www.docx2doc.com/",
    //             "name": "在线相互转换各种类型文件"
    //         },
    //         {
    //             "url": "http://www.bejson.com/",
    //             "name": "在线JSON校验格式化工具"
    //         },
    //         {
    //             "url": "https://www.explainshell.com/",
    //             "name": "Linux命令详细解析工具"
    //         },
    //         {
    //             "url": "http://tool.chinaz.com/Tools/unixtime.aspx",
    //             "name": "Unix时间戳(Unix timestamp)转换工具"
    //         },
    //         {
    //             "url": "http://tool.lanrentuku.com/jsformat/",
    //             "name": "JS/HTML格式化工具_懒人工具箱"
    //         },
    //         {
    //             "url": "http://wowubuntu.com/markdown/",
    //             "name": "Markdown 语法说明(简体中文版)"
    //         },
    //         {
    //             "url": "http://f2er.club/",
    //             "name": "前端人的俱乐部"
    //         }
    //     ],
    //     "虚拟机": [
    //         {
    //             "url": "http://www.92cto.com/blog/460.html",
    //             "name": "ESXi 5.0添加额外驱动全过程-虚拟化云计算,DBA,运维"
    //         }
    //     ]
    // }
    
}]);
