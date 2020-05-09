import React from "react";
import './style.scss';
import MedallistsList from'./MedallistList'

  
  export default function Medallists(){
    return (
        <div >
        <div >
          <h3>Medallists</h3>
        </div>
        <div className="first-row">
          <MedallistsList />
        </div>
      </div>

    );
  }