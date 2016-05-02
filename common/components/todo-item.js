var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
  , Router = isNode ? require('react-router').Router : window.ReactRouter.Router
  , Route = isNode ? require('react-router').Route : window.ReactRouter.Route
  , Link = isNode ? require('react-router').Link : window.ReactRouter.Link
  , hashHistory = isNode ? require('react-router').hashHistory : window.ReactRouter.hashHistory
  , _ = isNode ? require('underscore') : window._

var TodoItem = React.createClass({
  handleClick: function () {
    alert('You clicked!')
  },

  render: function() {
    return <div onClick={this.handleClick}>Hello {this.props.name}</div>
  }
})

function createElement(Component, props) {
   // Add myprop to props for all route components
   console.log("in custom createElement");
    _.extend(props, {name: "John"})
  return <Component {...props}/>
}

if (isNode) {
  console.log("in is node");
  module.exports.component = TodoItem;
} else {
  ReactDOM.render(
    <Router history={hashHistory} createElement={createElement}>
      <Route path="/" component={TodoItem} />
    </Router>,
    document.getElementById('react-root'))
}
