import React, { useState } from "react";

import "./proposalCard-style.scss";

export default function ProposalCard(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [imgSrc, setImgSrc] = useState(props.imgSrc);
  const [imgColor, setImgColor] = useState(props.imgColor);

  return (
    <div id="proposalCard">
      <div id="imgContainer" style={{ background: `${imgColor}` }}>
        <img src={imgSrc} />
      </div>
      <div id="cardContent">
        <span id="title">{title}</span>
        <span id="description">{description}</span>
        <img id="vectorButton" src="./img/Vector.png" />
      </div>
    </div>
  );
}
