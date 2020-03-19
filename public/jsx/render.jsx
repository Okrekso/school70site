import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
import { render } from "react-dom";

import "../scss/global.scss";

import EventBlock from "./eventBlockComponent/eventBlock";


export default function renderSite(to) {
  render(<Site />, to);
}

function Site() {
  return (
    <div id="content">
      <EventBlock/>  
    </div>
  );
}
