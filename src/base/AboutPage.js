import React from "react";
import Characteristic from "../components/Characteristic";
import profile from "../statics/profile.jpg";
export default class AboutPage extends React.Component {
  render() {
    return (
      <section id="about-section">
        <div className="container">
          <div id="about-page">
            <h1>About</h1>
            <div className="row">
              <Characteristic />
              <Characteristic />
              <Characteristic />
              <Characteristic />
            </div>
            <div className="col">
              <div id="info">
                <img id="profile" src={profile} alt="profile"/>
                <p id="text-info">more info about this guy</p>
              </div>
              <div id="skills">
                <h2>Skills</h2>
                <ul>
                  <li>==================================================</li>
                  <li>================================</li>
                  <li>======================</li>
                  <li>========================================</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
