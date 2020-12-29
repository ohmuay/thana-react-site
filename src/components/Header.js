import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

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
      <div id="navbar" className="nav navbar">
        <div className="nav">
          <p className="nav-brand">
            Meteor
            <i>
              <FontAwesomeIcon icon={["fas", "meteor"]} />
            </i>
          </p>
        </div>
        <div className="nav">
          <ul className="nav-link">
            <li className="nav-item">
              <a href="#landing-page" className="nav-button">
                Home
              </a>
            </li>
            <li className="nav-item">
            <a href="#about-page" className="nav-button">
            About
            </a>
            </li>
            <li className="nav-item">
              <a href="#projects-page" className="nav-button">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-button">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
