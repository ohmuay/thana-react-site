import React from "react";
import Button from "../components/Button";

export default class ProjectFilters extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button__container">
        {this.props.stacks.map((stack) => {
          return (
            <Button
              key={stack}
              stack={stack}
              onClick={(e) => {
                if (stack == "all") {
                  return this.props.setSelectedStack("");
                }
                this.props.setSelectedStack(stack);
              }}
            />
          );
        })}
      </div>
    );
  }
}
