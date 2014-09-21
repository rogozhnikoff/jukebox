'use strict';

(function (){
    var StateChangeConfig = function ($rootScope, $state, $localStorage, $location)
    {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            var isRegisteredToHome = ($localStorage.user && toState.name === 'welcome');
            var notRegisteredToWelcome = (!$localStorage.user && toState.name === 'home');
            if (isRegisteredToHome){
                $location.path('/');
                return;
            }
            if (notRegisteredToWelcome){
                $location.path('welcome');
                return;
            }
        });
    };

    StateChangeConfig.$inject = ['$rootScope', '$state', '$localStorage', '$location'];

    var module = angular.module('app');

    module.run(StateChangeConfig);
}());