var React = require('react');
var ReactDOM = require('react-dom');
var TodoItem = require('../lib/components/todo-item');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var TodoItemComponent = TodoItem.component;
// console.log(TodoItemComponent);
// Since we're not using JSX here, we need to wrap the component in a factory
// manually. See https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
var renderTarget = document.getElementById('content');
// TodoItemComponent = React.cloneElement(TodoItemComponent, {done: false, name: 'Write Tutorial'});

var TodoItemFactory = React.createFactory(TodoItemComponent);

// var routes = (
//   React.createElement(Route, {name: "contacts", path: "/", handler: TodoItemFactory})
// );


// ReactDOM.render(
//   React.createElement(
//     Router,
//     { history: browserHistory },
//     React.createElement(Route, {path: "/", component: TodoItemFactory })
//   ),
//   renderTarget);

// Router.run(routes, function(Handler) {
//   ReactDOM.render(React.createElement(Handler, {}),
//   renderTarget);
// });

// var renderTarget = document.getElementById('content');
//
// // Note the identical state to server/index.js
var renderedComponent = ReactDOM.render(
  TodoItemFactory({done: false, name: 'Write Tutorial'}),
  renderTarget
);
