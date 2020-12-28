import React from "react";
import Header from "../components/Header";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import Footer from "../components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Header />
        <AboutPage />
        <ProjectsPage />
        <Footer />
      </div>
    );
  }
}
