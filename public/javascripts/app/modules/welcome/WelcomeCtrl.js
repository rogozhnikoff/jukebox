'use strict';

(function() {
    var WelcomeCtrl = function(
        $state,
        $localStorage,
        mySocket
    ) {
        var _this = this;
        _this.$state = $state;
        _this.$localStorage = $localStorage;
        _this.mySocket = mySocket;
    };

    WelcomeCtrl.prototype.submit = function() {
        var _this = this;
        _this.$localStorage.$default({
            user: {
             nickname: _this.nickname,
             id: _.uniqueId('id_')
            }
        });
        _this.$state.go('home');
    };

    WelcomeCtrl.$inject = ['$state', '$localStorage', 'mySocket'];

    var module = angular.module('app.welcome');

    module.controller('WelcomeCtrl', WelcomeCtrl);
}());