import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
import { render } from "react-dom";
import Header from "./header/header";

export default function renderSite(to) {
  render(<Site/>, to);
}

function Site() {
  return (
    <>
        <Header/>
    </>
  );
}
