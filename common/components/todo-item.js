var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
  , Router = isNode ? require('react-router').Router : window.ReactRouter.Router
  , Route = isNode ? require('react-router').Route : window.ReactRouter.Route
  , Link = isNode ? require('react-router').Link : window.ReactRouter.Link
  , hashHistory = isNode ? require('react-router').hashHistory : window.ReactRouter.hashHistory
  , _ = isNode ? require('underscore') : window._
  , ReactBootstrap = isNode ? require('react-bootstrap') : window.ReactBootstrap


var Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem,
    NavDropdown = ReactBootstrap.NavDropdown;

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Cementify</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Sign Up</NavItem>
            <NavItem eventKey={2} href="#">Sign In</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

var CommentBox = React.createClass({
  handleClick: function () {

  },

  render: function() {
    return (
      <div className="commentBox">
        <NavBar />
        <CommentList />
        <CommentForm />
      </div>
    );
  }
})

// function createElement(Component, props) {
//    // Add myprop to props for all route components
//    console.log("in custom createElement");
//     _.extend(props, {name: "John"})
//   return <Component {...props}/>
// }

if (isNode) {
  console.log("in is node");
  module.exports.component = TodoItem;
} else {
  ReactDOM.render(
    <CommentBox />
    ,document.getElementById('react-root'))
}
