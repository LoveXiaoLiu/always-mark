/* 
* @Author: caoshuai
* @Date:   2017-09-23 14:05:32
* @Last Modified by:   caoshuai
* @Last Modified time: 2017-09-27 20:20:29
*/

// require.config({
//     baseUrl : 'js',
//     paths : {
//         pb : '../lib'
//     },
//     shim : {
//         'world' : {
//             deps : ['animalWorld'],
//             exports : 'world'
//         }
//     }
// });


// require(['cat', 'dog', 'world'], function(cat, dog, world) {
//     world.world();
//     cat.say();
//     dog.say();
// });


function HelloA($scope) {
    $scope.greeting = {
        text : "heelo"
    };
};