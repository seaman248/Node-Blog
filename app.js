var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var locables = require('./locables');
// Work with date
var moment = require('moment');
// Configuration requires
var conf = require('./conf');

// routes requires
var index = require('./routes/index');
var post = require('./routes/post');
var portfolio = require('./routes/portfolio');
var contacts = require('./routes/contacts');
var admin = require('./routes/admin');
// Define app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-compass')({mode: 'expanded'}));
app.use(express.static(path.join(__dirname, 'public')));

// Define routers
app.use('/', index);
app.use('/blog', post);
app.use('/portfolio', portfolio);
app.use('/contacts', contacts);
app.use('/admin', admin);
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


// Local variables
app.locals.title = locables.title;
app.locals.navLinks = locables.navLinks;
app.locals.moment = moment;

// Export
module.exports = app;
