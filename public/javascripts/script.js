$(function() {
    var $window = $(window);
    var socket = io();

    socket.emit('add user', 'testuser');

    // Whenever the server emits 'user joined', log it in the chat body
    socket.on('user joined', function (data) {
        console.log(data.username + ' joined');
    });

    // Whenever the server emits 'user left', log it in the chat body
    socket.on('user left', function (data) {
        console.log(data.username + ' left');
    });
})