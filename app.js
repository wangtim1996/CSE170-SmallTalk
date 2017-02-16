
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var project = require('./routes/project');
var history = require('./routes/history');
var log = require('./routes/log');
var challenge = require('./routes/challenge');
var entry = require('./routes/entry');
var help = require('./routes/help');
var guide = require('./routes/guide');
var complete = require('./routes/complete');
var add = require('./routes/add');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/project/:name', project.viewProject)
app.get('/history', history.view);
app.get('/log/:date', log.view);
app.get('/challenge', challenge.view);
app.get('/entry', entry.view);
app.get('/help', help.view);
app.get('/guide', guide.view);
app.get('/complete', complete.view);
app.get('/add', add.addEntry);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
