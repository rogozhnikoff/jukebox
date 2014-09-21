'use strict';

(function (){
    var RoutesConfig = function ($stateProvider, $urlRouterProvider, $locationProvider, appConfig)
    {
        $stateProvider
            .state('home', {
                url: appConfig.urls.home,
                views: {
                    'chat': {
                        templateUrl: appConfig.templates.chat,
                        controller: 'ChatCtrl',
                        controllerAs: 'ctrl'
                    },
                    'search': {
                        templateUrl: appConfig.templates.search,
                        controller: 'SearchCtrl',
                        controllerAs: 'ctrl'
                    },
                    'playlist': {
                        templateUrl: appConfig.templates.playlist,
                        controller: 'PlaylistCtrl',
                        controllerAs: 'ctrl'
                    },
                    'online': {
                        templateUrl: appConfig.templates.online,
                        controller: 'OnlineCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            })
            .state('welcome', {
                url: appConfig.urls.welcome,
                templateUrl: appConfig.templates.welcome,
                controller: 'WelcomeCtrl',
                controllerAs: 'ctrl'
            })
            .state('otherwise', {
                url: '*path',
                template: '<div>error</div>'
            });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

    };

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'appConfig'];

    var module = angular.module('app');

    module.config(RoutesConfig);
}());