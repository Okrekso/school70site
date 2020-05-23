import React, { Component } from "react";
import "./toggleButton.jsx";
import "./menuItem.scss";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ show: true }, () => {
      document.addEventListener("mouseover", this.hide);
    });
  }
  hide(e) {
    if (!this.dropDownMenu.contains(e.target)) {
      this.setState({ show: false }, () => {
        document.removeEventListener("mouseover", this.hide);
      });
    }
  }

  render() {
    const a = (
      <div className="dropDown">
        {this.props.menu.dropDown.map((el) => {
          return (
            <div key={el} className="dropDownItem">
              {el}
            </div>
          );
        })}
      </div>
    );
    return (
      <div
        className="menuList"
        ref={(element) => {
          this.dropDownMenu = element;
        }}
      >
        <div className="menuListItem" onMouseOver={this.show}>
          <span className="title">{this.props.menu.title}</span>
          <span className="arrow"></span>
        </div>
        {this.state.show ? a : null}
      </div>
    );
  }
}
