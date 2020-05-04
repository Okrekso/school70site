import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { render } from "react-dom";

import "../scss/global.scss";

import EventBlock from "./eventBlockComponent/eventBlock";
import ProposalBlock from "./proposalBlockComponent/proposalBlock";
import ToggleButton from "./dropDownMenuComponent/toggleButton.jsx";
import Header from "./headerComponent/headerComponent.jsx";

export default function renderSite(to) {
  render(<Site />, to);
}

function Site() {
  return (
    <div id="content">
      <ToggleButton />
      <Header />
      <ProposalBlock />
      <EventBlock />
    </div>
  );
}
