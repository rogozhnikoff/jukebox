'use strict';

(function(){
    var app = angular.module('app', [
        'ui.router',
        'ngStorage',
        'btford.socket-io',
        'ui.bootstrap',

        'app.configuration',
        'app.chat',
        'app.welcome',
        'app.online',
        'app.search',
        'app.playlist',
        'app.common'
    ]);

    angular.module('app.chat', []);
    angular.module('app.welcome', []);
    angular.module('app.online', []);
    angular.module('app.search', []);
    angular.module('app.playlist', []);
    angular.module('app.common', []);

}());

