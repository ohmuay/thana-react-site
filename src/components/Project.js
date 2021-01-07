import React from "react";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="project">
        <p className="project__title">{this.props.project.projectName}</p>
        <p className="project__link">{this.props.project.link}</p>
        <div className="project__stacks">
        {this.props.project.stacks.map((stack)=>{return <p className="project__stack">{stack}</p>})}
        </div>
        </div>
    );
  }
}
