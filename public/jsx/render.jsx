import React from "react";
import { render } from "react-dom";
import App from './App';
import "../scss/global.scss";

export default function renderSite(to) {
  render(<App />, to);
}