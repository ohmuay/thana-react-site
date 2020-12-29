import React from "react";
import Project from "../components/Project";
import ProjectFilters from "../components/ProjectFilters";

const stacks = [
  "node.js",
  "react",
  "express",
  "socket.io",
  "mongodb",
  "javascript",
  "fire-base",
];
const projects = [
  {
    projectName: "chat-app",
    stacks: ["react", "node.js", "socket.io", "express"],
    link: "www.google.com",
    thumbnail:
      "https://www.inventech.co.th/wp-content/uploads/2020/01/placeholder.png",
  },
  {
    projectName: "tic-tac-toe",
    stacks: ["javascript", "express"],
    link: "www.google.com",
    thumbnail:
      "https://www.inventech.co.th/wp-content/uploads/2020/01/placeholder.png",
  },
  {
    projectName: "to-do-list",
    stacks: ["react", "node.js", "express", "mongodb"],
    link: "www.google.com",
    thumbnail:
      "https://www.inventech.co.th/wp-content/uploads/2020/01/placeholder.png",
  },
  {
    projectName: "expensify",
    stacks: ["react", "node.js", "express", "fire-base"],
    link: "www.google.com",
    thumbnail:
      "https://www.inventech.co.th/wp-content/uploads/2020/01/placeholder.png",
  },
];

export default class Projects extends React.Component {
  state = {
    selectedStack: "node.js",
  };
  setSelectedStack = (stack) => {
    this.setState(() => ({ selectedStack: stack }));
  };
  getVisibleProjects = () => {
    if (this.state.selectedStack) {
      const visibleProjects = projects.filter((project) => {
        return project.stacks.includes(this.state.selectedStack);
      });
      return visibleProjects;
    }
    return projects;
  };
  render() {
    return (
      <section>
        <div id="projects-page">
          <h1>My Projects</h1>
          <ProjectFilters
            stacks={stacks}
            setSelectedStack={this.setSelectedStack}
          />
          {this.getVisibleProjects().map((project) => {
            return <Project key={project.projectName} project={project} />;
          })}
        </div>
      </section>
    );
  }
}
