import React, { Component } from "react";
import "./header.scss";

const navbar = [
  "Main Page",
  "About Us",
  "For students",
  "News",
  "Documents",
  "Contacts",
];

const about = ["cources", "prices", "events", "teachers"];

class JoinUs extends Component {
  render() {
    return (
      <div className="joinUs">
        <a href="#">Join Us</a>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        {navbar.map((el) => {
          return (
            <a href="#" key={el}>
              {el}
            </a>
          );
        })}
      </div>
    );
  }
}

class AboutButtons extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url('img/" + this.props.title + ".jpg')",
          backgroundSize: "cover",
        }}
      >
        <a href="#">{this.props.title}</a>
      </div>
    );
  }
}

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <JoinUs />
        <div className="header">
          <div className="header-navbar">
            <NavBar />
          </div>
          <div className="about-buttons">
            {about.map((el) => {
              return <AboutButtons title={el} key={el} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
