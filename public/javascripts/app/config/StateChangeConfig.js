'use strict';

(function (){
    var StateChangeConfig = function ($rootScope, $state, $localStorage)
    {
        var kkk = 2;
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            console.log('toState', toState, 'sss', $localStorage);
            var isRegisteredToHome = ($localStorage.username && toState.name === 'welcome');
            var notRegisteredToWelcome = (!$localStorage.username && toState.name != 'welcome');
            console.log('not',  toState.name);
//            if (isRegisteredToHome){
//                $state.go('home');
//                return;
//            }
//            if (notRegisteredToWelcome){
//                console.log('redirect');
//                $state.go('welcome');
//                return;
//            }
        });
    };

    StateChangeConfig.$inject = ['$rootScope', '$state', '$localStorage'];

    var module = angular.module('app');

    module.run(StateChangeConfig);
}());