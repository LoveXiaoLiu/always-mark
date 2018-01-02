/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   anchen
* @Last Modified time: 2018-01-02 21:02:01
*/

var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('myCtrl', ['$scope', '$http', '$modal', '$window', function($scope, $http, $modal, $window){
    $scope.labs = [{value: "Web", son: ["博客搭建", "AngularJS", "node", "require.js"]}];
    $scope.all_tags = [1,2,3];
    $scope.marks = '';
    $scope.none_clr = '';

    $scope.active_tag = "常用";

    function root_tag () {
        $http({
            url    : '/get_tags/',
            method : 'GET',
        }).success(function (response, header, config, status) {
            $scope.labs = response.result;
        });
    };

    function all_tag () {
        $http({
            url : '/get_tags/all/',
            method : 'GET'
        }).success(function (data, status, headers, config, statusText){
            if (data.status !=2000) {
                console.log("获取所有标签信息失败：" + data.message)
            } else {
                $scope.all_tags = data.result;
                console.log("获取所有标签信息成功！")
            };
        }).error(function (data, status, headers, config, statusText){
            console.log("获取所有标签信息失败：" + statusText)
        });
    };

    root_tag()
    all_tag();

    $scope.getTagUrls = function (tag) {
        $scope.active_tag = tag;

        var geturlurl = '/get_urls/'+ tag + '/'

        $http({
            url    : geturlurl,
            method : 'GET',
        }).success(function (response, header, config, status) {
            console.log(response)
            $scope.marks = response.result;
        });
    };

    $scope.getTagUrls("常用");

    $scope.addMark = function () {
        var modal_add = $modal.open({
            templateUrl : 'addmarks.html',
            controller  : 'addmarksController',
            windowClass : 'omais-inform-modal-window',
            resolve     : {
                a_tags : function(){
                    return $scope.all_tags;
                }
            }
        });

        modal_add.result.then(function(){}, function(){
            $scope.getTagUrls("常用");
        });
    };

    $scope.modifyMark = function () {
        var modal_modify = $modal.open({
            templateUrl : 'modifymarks.html',
            controller  : 'modifymarksController',
            windowClass : 'omais-inform-modal-window',
            resolve     : {
                m_tags : function(){
                    return {
                        tags : $scope.labs,
                        get_tag_url : $scope.getTagUrls,
                    };
                }
            }
        });

        modal_modify.result.then(function(){}, function(){
            $scope.getTagUrls("常用");
        });
    };

    $scope.search_url = function (s_str) {
        if (s_str == undefined) {
            alert("请输入查询条件......")
        } else {
            var s_url = '/search/' + s_str + '/';
            $http({
                url    : s_url,
                method : 'GET'
            }).success(function (data, status, headers, config, statusText) {
                if (data.status == 2000) {
                    console.log("查询成功：" + s_str);
                    $scope.marks = data.result;
                } else {
                    alert("查询出错：" + data.message);
                };
            }).error(function (data, status, headers, config, statusText) {
                alert("查询出错：" + statusText);
            });
        };
    };

    $scope.auto_sah = function (e, search_str) {
        var keycode = window.event ? e.keyCode : e.which;
        if(keycode==13){
            $scope.search_url(search_str);
        }
    };
    
}]);

app.filter('random_clr', function() {
    var colorr = {
         0 : "primary",
         1 : "success",
         2 : "info",
         3 : "warning",
         4 : "danger",
         5 : "info",
     }
    return function (){
        var r = Math.round(Math.random()*5);
        return colorr[r];
    };
});

app.controller('addmarksController', ['$scope', '$modalInstance', '$http', '$window', 'a_tags', function ($scope, $modalInstance, $http, $window, a_tags){
    $scope.curTags = a_tags;

    $scope.tag = ''
    $scope.name = ''
    $scope.href = ''
    $scope.pwd = ''

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.add = function () {
        var addurl = '/add_mark/';

        if ($scope.tag=='' || $scope.name=='' || $scope.href=='') {
            alert("参数错误！")
        } else {
            var data = {
                tag  : $scope.tag,
                name : $scope.name,
                href : $scope.href,
                pwd  : $scope.pwd
            }

            $http({
                url    : addurl,
                method : 'POST',
                data   : data
            }).success(function (data, status){
                if (data.status == 2000) {
                    alert("添加成功!");
                    $scope.cancel();
                } else if (data.status == 5001) {
                    alert("添加失败：口令错误！");
                } else {
                    alert("添加失败：参数错误！");
                };
            }).error(function (data, status, headers, config, statusText){
                alert("添加失败:" + statusText);
            });
        };
    };
}]);

app.controller('modifymarksController', ['$scope', '$modalInstance', '$http', '$window', 'm_tags', function ($scope, $modalInstance, $http, $window, m_tags){
    $scope.curTags = m_tags.tags;
    $scope.sonTag = '';

    $scope.getTagUrls = function (tag) {
        var geturlurl = '/get_urls/'+ tag + '/'

        $http({
            url    : geturlurl,
            method : 'GET',
        }).success(function (response, header, config, status) {
            console.log(response)
            $scope.urlmarks = response.result;
        });
    };

    $scope.get_son = function (father) {
        for (var i = 0; i < $scope.curTags.length; i++) {
            var tmp = $scope.curTags[i];
            // console.log($scope.curTags[i]);
            if (father == tmp["value"]){
                $scope.sonTag =  tmp["son"];
                break;
            }
        };
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);