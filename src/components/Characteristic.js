import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default class Characteristic extends React.Component {
  render() {
    return (
      <div className="character">
        <div className="hexagon">
          <i>
            <FontAwesomeIcon icon={["fas", "fire"]} />
          </i>
        </div>
        <h2>Fast</h2>
        <p>Fast load times and lag free interaction, my highest priority</p>
      </div>
    );
  }
}
