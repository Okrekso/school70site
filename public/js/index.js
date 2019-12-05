import $ from "jquery";
import renderSite from "../jsx/render";
import "../scss/global.scss";

$(document).ready(() => {
  renderSite($("#container")[0]);
});
