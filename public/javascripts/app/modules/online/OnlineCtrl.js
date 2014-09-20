'use strict';

(function() {
    var OnlineCtrl = function(
        mySocket,
        $localStorage
        ) {
        var _this = this;
        _this.members = [];
        _this.mySocket = mySocket;
        _this.$localStorage = $localStorage;

        _this.addUser();
        _this.listenEvents();
    };

    OnlineCtrl.prototype.listenEvents = function(){
        var _this = this;

        _this.mySocket.on('user joined', function (data) {
            _this.members.push(_this.$localStorage.user);
        });
    };

    OnlineCtrl.prototype.addUser = function() {
      var _this = this;

      _this.mySocket.emit('add user', _this.$localStorage.user);
      _this.members.push(_this.$localStorage.user);
    };

    OnlineCtrl.$inject = ['mySocket', '$localStorage'];

    var module = angular.module('app.online');

    module.controller('OnlineCtrl', OnlineCtrl);
}());