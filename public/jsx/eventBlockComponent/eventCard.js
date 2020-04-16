import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom'

import './eventBlock.scss';
import * as moment from 'moment'


function EventCard(props){

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [date, setDate] = useState(props.date);
    const [color, setColor] = useState(props.color);

    const history = useHistory();

    return(
        <div id="block" className="currentEvent" style={{background: `${color}`}} onClick = {()=>history.push(props.url)}>
            <div className="eventDate"><span id="eventDateDay">{moment(date).format('D')}</span><br/>{moment(date).format('MMMM')}</div>
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
