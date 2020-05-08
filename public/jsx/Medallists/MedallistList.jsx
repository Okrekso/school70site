import React, { useState, useEffect } from "react";
import MedallistItem from './MedallistItem';
import {db} from '../../js/firebase';
import "./style.scss";

function Medallists(){
  const [medallists, setMedallists] = useState([]);

  useEffect(() => {
    db.collection('medallists').onSnapshot(getDocs => {
      setMedallists(getDocs.docs.map(doc => doc.data()));
    })
  console.log( medallists);
  },[]);
  return(
      <ul className="medallistslist">
          {medallists.map(item =>{
              <MedallistItem key={item.id}  item={item}/>
          })}
      </ul>
  );
}
export default Medallists;