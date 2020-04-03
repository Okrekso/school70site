import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
import { render } from "react-dom";
import App from './App';
import Header from "./header/header";
import TimerBlock from "./timerBlock/timerBlock";

import "../scss/global.scss";

import EventBlock from "./eventBlockComponent/eventBlock";
import ProposalBlock from "./proposalBlockComponent/proposalBlock";


export default function renderSite(to) {
  render(<Site />, to);
}

function Site() {
  return (
    <>
    {/* <text>lol</text> */}
    <App/>
    {/* <Header/> */}
    </>
    <div id="content">
      <ProposalBlock/>
      <EventBlock/>  
    </div>
  );
}
