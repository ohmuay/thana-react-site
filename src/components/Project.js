import React from "react";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.project.projectName}</p>
        <p>{this.props.project.link}</p>
      </div>
    );
  }
}
