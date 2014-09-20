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
        _this.username = _this.$localStorage.$default({
            username: _this.nickname
        });
        _this.$state.go('home');
        _this.mySocket.emit('add user', _this.nickname);
    };

    WelcomeCtrl.$inject = ['$state', '$localStorage', 'mySocket'];

    var module = angular.module('app.welcome');

    module.controller('WelcomeCtrl', WelcomeCtrl);
}());