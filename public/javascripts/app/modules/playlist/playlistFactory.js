'user strict';

(function (){

    var PlaylistFactory = function() {
        var service = {
            items: []
        }

        return service;
    };

    PlaylistFactory.$inject = [];

    var module = angular.module('app.playlist');

    module.factory('PlaylistFactory', PlaylistFactory);

}());