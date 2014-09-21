'use strict';

(function(){

    var module = angular.module('app');

    module.factory('mySocket', function (socketFactory) {
        return socketFactory();
    });
}());

