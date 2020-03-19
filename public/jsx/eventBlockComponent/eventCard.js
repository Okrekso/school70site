import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import './eventBlock.scss';


function EventCard(props){

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [dateDay, setDateDay] = useState(props.dateDay);
    const [dateMonth, setDateMonth] = useState(props.dateMonth);


    return(
        <div id="block" className="currentEvent">
            <div className="eventDate"><span id="eventDateDay">{dateDay}</span><br/>{dateMonth}</div>
            <div className="eventImgBackground" style={{backgroundImage:`url(${imgSrc})`}}></div>
            <div className="eventTitle">{title}</div>
            <div className="eventDescription">
                <div className="descriptionText"><p>{description}</p></div>
                <button>Читати далі</button>
            </div>
        </div>
    );

}


export default EventCard;
