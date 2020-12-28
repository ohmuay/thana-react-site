import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../components/Balls";
library.add(fas);

export default class LandingPage extends React.Component {
  render() {
    return (
      <section>
        <div id="landing-page">
          <h1>
            Hello, I'm <span className="real-name">Thana Wisutphusi</span>.
          </h1>
          <h2>I'm a full-stack web developer.</h2>
          <a href="#projects-page">
            <button>
              View my works
              <i id="arrow-right">
                <FontAwesomeIcon icon={["fas", "arrow-right"]} />
              </i>
              <i id="arrow-down">
                <FontAwesomeIcon icon={["fas", "arrow-down"]} />
              </i>
            </button>
          </a>
        </div>
      </section>
    );
  }
}
