import React from "react";

import "./proposalBlock-style.scss";

import ProposalCard from "./proposalCard";

export default function ProposalBlock() {
  return (
    <div id="proposalBlock">
      <div id="blockTitle">Наші пропозиції для дітей</div>
      <ProposalCard
        title="Кухня"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo beatae voluptatibus consequatur facilis quasi placeat nisi cum atque aspernatur."
        imgSrc="./img/food.png"
        imgColor="#F9BD08"
      />

      <ProposalCard
        title="Спортивна секція"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo beatae voluptatibus consequatur facilis quasi placeat nisi cum atque aspernatur."
        imgSrc="./img/sport.png"
        imgColor="#F46A29"
      />
      <ProposalCard
        title="Гуртки малювання"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo beatae voluptatibus consequatur facilis quasi placeat nisi cum atque aspernatur."
        imgSrc="./img/draw.png"
        imgColor="#49C693"
      />
      <ProposalCard
        title="Музичний клас"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo beatae voluptatibus consequatur facilis quasi placeat nisi cum atque aspernatur."
        imgSrc="./img/music.svg"
        imgColor="#4DD1E8"
      />
      <ProposalCard
        title="Екскурсії"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo beatae voluptatibus consequatur facilis quasi placeat nisi cum atque aspernatur."
        imgSrc="./img/map.svg"
        imgColor="#D479D7"
      />
      <ProposalCard
        title="Гуртки різних мов"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo beatae voluptatibus consequatur facilis quasi placeat nisi cum atque aspernatur."
        imgSrc="./img/language.svg"
        imgColor="#EE605A"
      />
    </div>
  );
}
