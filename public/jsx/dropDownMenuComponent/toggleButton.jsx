import React, { Component } from "react";
import "./menuItem.jsx";
import MenuItem from "./menuItem.jsx";

import "./menuItem.scss";

const menu = [
  {
    id: "0",
    title: "Головна сторінка",
    dropDown: [
      "Інформація про школу",
      "Відеозвіт",
    ],
  },
  {
    id: "1",
    title: "Педагогічне хроно",
    dropDown: [
      "First Element About",
      "Second Element About",
      "Third Element About",
      "Fourth Element About",
    ],
  },
  {
    id: "2",
    title: "Умови вступу",
    dropDown: [
      "First Element Contact",
      "Second Element Contact",
      "Third Element Contact",
      "Fourth Element Contact",
    ],
  },
  {
    id: "3",
    title: "Медалісти школи",
    dropDown: [
      "First Element Contact",
      "Second Element Contact",
      "Third Element Contact",
      "Fourth Element Contact",
    ],
  },
  {
    id: "4",
    title: "Шкільні гуртки",
    dropDown: [
      "First Element Contact",
      "Second Element Contact",
      "Third Element Contact",
      "Fourth Element Contact",
    ],
  },
  {
    id: "5",
    title: "Фотоальбоми",
    dropDown: [
      "First Element Contact",
      "Second Element Contact",
      "Third Element Contact",
      "Fourth Element Contact",
    ],
  },
  {
    id: "6",
    title: "Фінансово-господарська діяльність",
    dropDown: [
      "First Element Contact",
      "Second Element Contact",
      "Third Element Contact",
      "Fourth Element Contact",
    ],
  },
  {
    id: "7",
    title: "Проекти",
    dropDown: [
      "First Element Contact",
      "Second Element Contact",
      "Third Element Contact",
      "Fourth Element Contact",
    ],
  },
  {
    id: "8",
    title: "Вакансії працівників",
    dropDown: [
      "First Element Contact",
      "Second Element Contact",
      "Third Element Contact",
      "Fourth Element Contact",
    ],
  },
];

export default class toggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show(e) {
    e.preventDefault();
    this.setState({ show: true }, () => {
      document.addEventListener("click", this.hide);
    });
  }

  hide(e) {
    if (!this.menuItem.contains(e.target))
      this.setState({ show: false }, () => {
        document.removeEventListener("click", this.hide);
      });
  }

  render() {
    const a = (
      <div
        className="menu"
        ref={(element) => {
          this.menuItem = element;
        }}
      >
        {menu.map((el) => {
          return <MenuItem key={el.id} menu={el} />;
        })}
      </div>
    );
    return (
      <div className="menuWrapper">
        <button onClick={this.show} className="toggleBtn">
          <img src="./img/toogleButton.jpg" />
        </button>
        {this.state.show ? a : null}
      </div>
    );
  }
}
