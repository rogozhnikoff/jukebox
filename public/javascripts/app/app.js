'use strict';

(function(){
    var app = angular.module('app', [
        'ui.router',
        'ngStorage',
        'btford.socket-io',

        'app.configuration',
        'app.chat',
        'app.welcome'
    ]);

    app.factory('mySocket', function (socketFactory) {
        return socketFactory();
    });

    angular.module('app.chat', []);
    angular.module('app.welcome', []);

}());

