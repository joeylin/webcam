
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index.js')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser()); //use to get form info from client with the method of post
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public'))); //set static file path
});

console.log(__dirname);
console.dir(routes);

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/shop', routes.shop);
//app.get('/users', user.list);
app.post('/upload',routes.upload);
app.post('/userInfo',routes.userInfo);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
