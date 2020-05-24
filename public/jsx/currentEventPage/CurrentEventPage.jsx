import React, { useState } from 'react'

import './CurrentEventPage-style.scss'
import * as moment from 'moment'

export default function CurrentEventPage(title, description, imgSrc, date, color){

    // const [title, setTitle] = useState(props.title);
    // const [description, setDescription] = useState(props.description);
    // const [imgSrc, setImgSrc] = useState(props.imgSrc);
    // const [date, setDate] = useState(props.date);

    return(
        <div id = 'currentEventPage'>
            <div id = 'imgPart'>
                <img id="eventImg" src={imgSrc}/>
                <div id="eventDate"><span id="eventDateDay">{moment(date).format('D')}</span><br/>{moment(date).format('MMMM')}</div>
            </div>
            <div id = 'contentPart'>
                <div id="eventTitle">{title}</div>
                <div id="descriptionText"><p>{description}</p></div>
            </div>
        </div>
    )
}