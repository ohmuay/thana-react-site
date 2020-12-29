import React from "react";

export default class ProjectFilters extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.stacks.map((stack) => {
          return (
            <button
              key={stack}
              onClick={(e) => {
                this.props.setSelectedStack(stack);
              }}
            >
              {stack}
            </button>
          );
        })}
      </div>
    );
  }
}
