/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-28 15:39:17
*/

var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('myCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal){
    $scope.labs = '';
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
    
    
}]);

app.controller('addmarksController', ['$scope', '$modalInstance', '$http', '$window', 'tags', function ($scope, $modalInstance, $http, $window, tags){
    $scope.curTags = tags;
    console.log($scope.curTags);
    $scope.tag = ''
    $scope.name = ''
    $scope.href = ''

    $scope.cancel = function () {
        console.log($scope.tag);
        console.log($scope.name);
        console.log($scope.href);
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
                href : $scope.href
            }

            $http({
                url    : addurl,
                method : 'POST',
                data   : data
            }).success(function(data, status){
                if (data.status != 2000) {
                    alert("添加失败:" + data.message);
                } else {
                    alert("添加成功!");
                    $scope.cancel();
                };
            }).error(function(data, status, headers, config, statusText){
                alert("添加失败:" + statusText);
            });
        };
    };
}]);
