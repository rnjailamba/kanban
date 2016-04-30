var modules = require('./setup/all_modules');//require all modules that are shared by all controllers
var router = modules.express.Router();
var config = require('../config/config.js');//require all modules that are shared by all controllers
var appConfig = require('../config/appConfig'); // configure service api urls in dev/prod/beta
var redisClient = require('../helpers/exporters/export_redisClient').redisClient;
var loginMiddleWare = require("../helpers/login/api.js");
var TodoItem = require('../lib/components/todo-item');
var React = modules.React;
var Handlebars = modules.Handlebars;
var fs = modules.fs;


// PING
// ==============================================
router.get('/ping', function(req, res){

    res.status(200).send("Done");

});


// INDEX
// ==============================================
router.get('/', function(req, res){

    var renderedComponent = getRenderedComponent(TodoItem);
    var renderedLayout = getRenderedLayout(renderedComponent);
    res.status(200).send(renderedLayout);

});


// INDEX
// ==============================================
router.get('/index', function(req, res){

  var renderedComponent = getRenderedComponent(TodoItem);
  var renderedLayout = getRenderedLayout(renderedComponent);
  res.status(200).send(renderedLayout);
  
});




var getRenderedComponent = function(TodoItem){
  // Since we're not using JSX here, we need to wrap the component in a factory
  // manually. See https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
  var TodoItemFactory = React.createFactory(TodoItem.component);

  var renderedComponent = React.renderToString(
    TodoItemFactory({done: false, name: 'Write Tutorial'})
  );
  return renderedComponent;
}

var getRenderedLayout = function(renderedComponent){
  var fileData = fs.readFileSync( __dirname + '/../templates/layout.handlebars' ).toString();
  var layoutTemplate = Handlebars.compile(fileData);

  var renderedLayout = layoutTemplate({
    content: renderedComponent
  });
  return renderedLayout;
}

module.exports.router = router;
