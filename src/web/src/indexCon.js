/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   caoshuai
* @Last Modified time: 2017-09-29 17:23:00
*/

var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function($scope){

    $scope.labs = ['python','pythfsafasfasfasfasfon1','python2','python5','pythonw', 'shell', 'shell8', 'shell6', 'shell1', 'shell2', 'django', 'django1', 'django2', 'django4', 'django3', 'django6', 'django7', 'django8']

    $scope.colorr = {
        0 : "primary",
        1 : "success",
        2 : "info",
        3 : "warning",
        4 : "danger",
        5 : "default",
    }

    $scope.marks = {
        "python" : [
            {
                "name" : "百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！",
                "url" : "https://www.baidu.com"
            },
            {
                "name" : "Googl百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！e",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Goog百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！le",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Goo百度一下！百度一下！百度一下！百度一下！百度一下！gle",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Goo百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！gle",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Google",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Goog百度一下！百度一下！百度一下！百度一下！le",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Goo百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！gle",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Go百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！百度一下！ogle",
                "url" : "http://www.google.com"
            },
            {
                "name" : "Go百度一下！百度一下！百度一下！百度一下！ogle",
                "url" : "http://www.google.com"
            }
        ]
    }
    
}]);