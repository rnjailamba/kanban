var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM

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
  ReactDOM.render(<TodoItem name="John" />, document.getElementById('react-root'))
}
