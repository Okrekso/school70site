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

export default function renderSite(to) {
  render(<App />, to);
}

// function Site() {
//   return (
//     <>
//     {/* <text>lol</text> */}
//     <App/>
//     </>
//   );
// }
