'use strict';

(function() {
    var SearchCtrl;
    SearchCtrl = function (PlaylistFactory) {
        var _this = this;
        window.fff = this;

        _this.PlaylistFactory = PlaylistFactory;
    };

    SearchCtrl.prototype.submit = function (form) {
        var _this = this;

        if (form.$invalid) return;

        console.log('submit', _this.search);
        _this.PlaylistFactory.items.push(_this.search);
        _this.search = null;
        form.$setPristine(true);

    };

    SearchCtrl.prototype.showError = function (form) {
        if (form.url.$error.validUrl && form.$dirty)
            return true;
        else
            return false;
    };

    SearchCtrl.$inject = ['PlaylistFactory'];

    var module = angular.module('app.search');

    module.controller('SearchCtrl', SearchCtrl);
}());