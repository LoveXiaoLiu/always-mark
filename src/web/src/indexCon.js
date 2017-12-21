/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-21 20:45:05
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

    $scope.getTagUrls = function (tag) {
        var geturlurl = '/get_urls/'+ tag + '/'

        $http({
            url    : geturlurl,
            method : 'GET',
        }).success(function (response, header, config, status) {
            console.log(response)
            $scope.marks = response.result;
        });
    };

    getTagUrls("常用");

    
    
}]);
