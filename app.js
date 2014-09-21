var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();
var server = http.createServer(app).listen(3001);
var io = require('socket.io').listen(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// Chat logic

var usernames = {};
var numUsers = 0;

io.on('connection', function (socket) {
    // when the client emits 'new message' this listens and executes
    socket.on('new message', function (data) {
        socket.broadcast.emit('new message', data) ;
    });

    // when the client emits 'add user', this listens and executes
    socket.on('add user', function (user) {
        // we store user in socket session
        console.log('add user', user);
        socket.user = user;

        usernames[user.id] = user;
        numUsers = numUsers + 1;
        console.log('usernames', usernames);
        console.log('numUsers', numUsers);

//        socket.emit('login', {
//            numUsers: numUsers
//        });

        // echo globally that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    // when user disconnects
    socket.on('disconnect', function () {
        if (!socket.user) return;
        console.log('disconnect', socket.user);

        delete usernames[socket.user.id];
        --numUsers;

        socket.broadcast.emit('user left', {
            user: socket.user,
            numUsers: numUsers
        });
    });
});


module.exports = app;
