var React = require('react');

var TodoComponent = React.createClass({
  displayName: 'TodoItem',

  /**
   * Lifecycle functions
   **/
  getInitialState: function () {
    return { done: this.props.done };
  },

  componentDidMount: function () {},

  render: function () {
    return React.createElement(
      'label',
      null,
      React.createElement('input', { ref: 'done', type: 'checkbox', defaultChecked: this.state.done, onChange: this.onChange }),
      this.props.name
    );
  },

  /**
   * Event handlers
   **/
  onChange: function (event) {
    this.setDone(event.target.checked);
  },

  /**
   * Utilities
   **/
  setDone: function (done) {
    this.setState({ done: !!done });
  }
});

module.exports.component = TodoComponent;