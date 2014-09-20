'use strict';

(function () {
    var config = {
        templates: {
            chat: "/javascripts/app/modules/chat/chat.html",
            search: "/javascripts/app/modules/search/search.html",
            playlist: "/javascripts/app/modules/playlist/playlist.html",
            welcome: "/javascripts/app/modules/welcome/welcome.html"
        },
        api: {

        }
    }

    angular.module('app.configuration', [])
        .constant('appConfig', config);
}());