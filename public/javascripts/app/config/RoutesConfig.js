'use strict';

(function (){
    var RoutesConfig = function ($stateProvider, $urlRouterProvider, $locationProvider, appConfig)
    {
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'chat': {
                        templateUrl: appConfig.templates.chat,
                        controller: 'ChatCtrl',
                        controllerAs: 'ctrl'
                    },
                    'search': {
                        templateUrl: appConfig.templates.search
                    },
                    'playlist': {
                        templateUrl: appConfig.templates.playlist
                    },
                    'online': {
                        templateUrl: appConfig.templates.online,
                        controller: 'OnlineCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            })
            .state('welcome', {
                url: '/welcome',
                templateUrl: appConfig.templates.welcome,
                controller: 'WelcomeCtrl',
                controllerAs: 'ctrl'
            })
            .state('otherwise', {
                url: '*path',
                template: '<div>error</div>'
            });
    };

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'appConfig'];

    var module = angular.module('app');

    module.config(RoutesConfig);
}());