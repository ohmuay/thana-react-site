import React from "react";

export default class Header extends React.Component {
  componentDidMount() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }

  render() {
    return (
      <div id="navbar" className="header">
        <div className="nav-bar">
          <p className="nav-link nav-brand">LOGO</p>
        </div>
        <nav className="nav-bar">
          <p className="nav-link nav">home</p>
          <p className="nav-link nav">projects</p>
          <p className="nav-link nav">about</p>
          <p className="nav-link nav">contact</p>
        </nav>
      </div>
    );
  }
}
