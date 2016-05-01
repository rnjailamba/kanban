var TodoComponent = React.createClass({
  displayName: 'TodoItem',

  /**
   * Lifecycle functions
   **/
  getInitialState: function() {
    return { done: this.props.done }
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
            <label>
               <input ref="done" type="checkbox" defaultChecked={this.state.done} onChange={this.onChange} />
               {this.props.name}
             </label>
    );
  },

  /**
   * Event handlers
   **/
  onChange: function(event) {
    this.setDone(event.target.checked);
  },

  /**
   * Utilities
   **/
  setDone: function(done) {
    this.setState({ done: !!done});
  }
});
var renderTarget = document.getElementById('content');

ReactDOM.render(
  <TodoComponent done={false} name={'Write Tutorial'} />,
  renderTarget
);
