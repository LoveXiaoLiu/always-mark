/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-25 21:22:56
*/

var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('myCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal){

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
            windowsClass: 'iniform-modal-window',
            scope       : $scope,
            size        : 'lg',
            keyboard    : true
        });

        $scope.modal_add = modal_add
    };
    
    
}]);

app.controller('addmarksController', ['$scope', '$http', function($scope, $http){

}]);