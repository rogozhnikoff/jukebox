'use strict';

(function() {
    var PlaylistCtrl;
    PlaylistCtrl = function (PlaylistFactory) {
        var _this = this;

        _this.PlaylistFactory = PlaylistFactory;

        window.qqq = _this;

    };



    PlaylistCtrl.$inject = ['PlaylistFactory'];

    var module = angular.module('app.playlist');

    module.controller('PlaylistCtrl', PlaylistCtrl);
}());