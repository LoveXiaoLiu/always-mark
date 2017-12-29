/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-29 17:01:22
*/

var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('myCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal){
    $scope.labs = '';
    $scope.marks = '';
    $scope.none_clr = '';
    var apiurl = '/get_tags/';
    console.log(apiurl);

    $scope.active_tag = "常用";

    $http({
        url    : apiurl,
        method : 'GET',
    }).success(function (response, header, config, status) {
        console.log(response)
        $scope.labs = response.result;
    })


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
                tags : function(){
                    return $scope.labs;
                }
            }
        });

        modal_add.result.then(function(){}, function(){
            $scope.getTagUrls("常用");
        });
    };

    $scope.search_url = function (s_str) {
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
    
    
}]);

app.controller('addmarksController', ['$scope', '$modalInstance', '$http', '$window', 'tags', function ($scope, $modalInstance, $http, $window, tags){
    $scope.curTags = '';

    $scope.tag = ''
    $scope.name = ''
    $scope.href = ''
    $scope.pwd = ''

    $http({
        url : '/get_tags/all/',
        method : 'GET'
    }).success(function (data, status, headers, config, statusText){
        if (data.status !=2000) {
            console.log("获取所有标签信息失败：" + data.message)
        } else {
            $scope.curTags = data.result;
            console.log("获取所有标签信息成功！")
        };
    }).error(function (data, status, headers, config, statusText){
        console.log("获取所有标签信息失败：" + statusText)
    });

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