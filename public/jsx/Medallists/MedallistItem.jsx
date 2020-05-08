import React from 'react';
 
function MedallistItem({item}){
    
    console.log(item)
    return(
        <li className="image-item">
            <div className="problem__content">
                <div className="title">
                    <div className="name">{item.fname} {item.sname}</div>
                </div>
                <div className="body"></div>
            </div>
            <div className="problem__hidden">
                <div className="problem__description">{item.description}</div>
            </div>
        </li>
    );
}
export default MedallistItem;