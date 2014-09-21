'use strict';

(function (){
    var UrlsConfig = function ($urlRouterProvider)
    {

        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.url();

            if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
                return;
            }

            if (path.indexOf('?') > -1) {
                return path.replace('?', '/?');
            }

            return path + '/';
        });
    };

    UrlsConfig.$inject = ['$urlRouterProvider'];

    var module = angular.module('app');

    module.config(UrlsConfig);
}());