'use strict';

(function() {
    var ChatCtrl = function($state, $localStorage, mySocket) {
        var _this = this;
        _this.messages = [];
        _this.mySocket = mySocket;
        _this.$localStorage = $localStorage;

        _this.listenEvents();



    };

    ChatCtrl.prototype.listenEvents = function() {
        var _this = this;

        _this.mySocket.on('new message', function(obj){
            _this.messages.push(obj);
        });
    };

    ChatCtrl.prototype.sendMessage = function() {
        var _this = this,
            messageWithUsername;

        messageWithUsername = {
            message: _this.message,
            username: _this.$localStorage.user.nickname
        };

        _this.mySocket.emit('new message', messageWithUsername);
        _this.messages.push(messageWithUsername);
        _this.message = null;
    };

    ChatCtrl.$inject = ['$state', '$localStorage', 'mySocket'];

    var module = angular.module('app.chat');

    module.controller('ChatCtrl', ChatCtrl);
}());