import React, { useState, useEffect } from "react";
import MedallistItem from './MedallistItem';
import {db} from '../../js/firebase';


function MedallistsList(){
  const [medallists, setMedallists] = useState([]);

  useEffect(() => {
    db.collection('medallists').onSnapshot(getDocs => {
      setMedallists(getDocs.docs.map(doc => doc.data()));
    })
  console.log( medallists);
  },[]);
  if(medallists.length == 0){
    return (<div></div>);
  }
  else{
    return(
        <ul className="medallistslistOne">
            {medallists.map(item =>{
                return <MedallistItem key={item.id}  item={item}/>;
            })}
        </ul>
    );
  }
}
export default MedallistsList;