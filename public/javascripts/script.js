$(function() {
    var $window = $(window);
    var socket = io();

    function getCurrentUser() {
        var username = localStorage.getItem('username');
        if (username)
            return username;
        else
            return false;
    }

    function setCurrentUser(username) {
        localStorage.setItem('username', username);
    }

    function renderLoginForm() {
        var formTpl = "" +
            "<div class='login-form'>" +
              "<div class='login-form__title'>" +
                "What's your nickname?" +
              "</div>" +
              "<input type='text' class='login-form__input' data-element='username'>" +
             "</div>";
        $(formTpl).appendTo('.container')
    }

    function removeLoginForm() {
        $('.container').empty();
    }

    function renderPage() {
        console.log('renderPage');
        var pageTpl = "" +
            "<div class='page'>" +
            "<div class='page__title'>" +
            "Jukebox" +
            "</div>" +
            "<div class='page__chat chat'>" +
                "<div class='chat__title'>" +
                    "Chat" +
                "</div>" +
                "<div class='chat__list'>" +
                "</div>"
                "<input type='text' class='chat__input' data-element='chat'>" +
            "</div>";

        $(pageTpl).appendTo('.container')

    }

    function addChatMessage(message) {
        console.log('message', message);
        socket.emit('new message', message);
    }



    // Socket events

    socket.on('new message', function (data) {
       console.log('new message', data)
    });

    // Whenever the server emits 'user joined', log it in the chat body
    socket.on('user joined', function (data) {
        console.log(data.username + ' joined');
    });

    // Whenever the server emits 'user left', log it in the chat body
    socket.on('user left', function (data) {
        console.log(data.username + ' left');
    });

    // Keyboard events
//    $window.on('.login-form__input', 'input', function () {
//        console.log('input', this);
//    });
    $window.keydown(function (event) {
        if (event.which === 13) {
            var $element = $(event.target);
            var type = $element.data('element');
            var value = $element.val();
            if (type == 'username'){
                setCurrentUser(value);
                removeLoginForm();
                renderPage();
            }
            else if (type == 'chat') {
                console.log('chat');
                addChatMessage(value);
            }
        }

    });


    // Initialization
    if (getCurrentUser() === false)
        renderLoginForm();
    else
        renderPage();
    socket.emit('add user', 'testuser');


})