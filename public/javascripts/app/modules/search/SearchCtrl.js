'use strict';

(function() {
    var SearchCtrl;
    SearchCtrl = function (PlaylistFactory) {
        var _this = this;

        _this.PlaylistFactory = PlaylistFactory;
    };

    SearchCtrl.prototype.submit = function () {
        var _this = this;
        debugger
        console.log ('form', _this.form);

        console.log('submit', _this.search);
        _this.PlaylistFactory.items.push(_this.search);
        _this.search = null;

    };

    SearchCtrl.$inject = ['PlaylistFactory'];

    var module = angular.module('app.search');

    module.controller('SearchCtrl', SearchCtrl);
}());