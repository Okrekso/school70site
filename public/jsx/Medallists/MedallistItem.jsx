import React from 'react';
import './style.scss';
 
function MedallistItem({item}){
    let styles = {
        background: `url(${item.img}) no-repeat center left / cover`,
    }
    console.log(item)
    return(
        <li className="image-item">
            <div className="problem__content">
                <div className="title">
                    <div className="name">{item.fname} {item.sname}</div>
                </div>
                <div className="body" style={styles} >
                    
                </div>
            </div>
            <div className="problem__hidden">
                <div className="problem__description">{item.description}</div>
            </div>
        </li>
    );
}
export default MedallistItem;