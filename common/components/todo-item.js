var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
  , Router = isNode ? require('react-router').Router : window.ReactRouter.Router
  , Route = isNode ? require('react-router').Route : window.ReactRouter.Route
  , Link = isNode ? require('react-router').Link : window.ReactRouter.Link
  , hashHistory = isNode ? require('react-router').hashHistory : window.ReactRouter.hashHistory

var TodoItem = React.createClass({
  handleClick: function () {
    alert('You clicked!')
  },

  render: function() {
    return <div onClick={this.handleClick}>Hello {this.props.name}</div>
  }
})

if (isNode) {
  console.log("in is node");
  module.exports.component = TodoItem;
} else {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={TodoItem}/>
    </Router>,
    document.getElementById('react-root'))
}
