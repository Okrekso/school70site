import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom'
import './eventBlock.scss';
import EventCard from './eventCard';



function eventBlock(props){
    // moment.locale('ru'); 
    // console.log(moment().format('MMMM'));
    // console.log(moment().format('D'));
    // console.log(moment('2015/03/05').format('D'));

    const history = useHistory();

    return(
    <div id="eventBlock">
        
        <div id = "blockTitle"><Link to = "/events">Не пропусти наші події</Link></div>
        <EventCard title="Відпочинок в парку" 
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" 
            imgSrc="/img/1.jpg" 
            date="2020/05/12"
            color="#6affe8"
            eventId = "card1"
            />
        <EventCard title="Тренування в басейні" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/2.jpg" date="2020/07/02" color="#9967" url = "card2"/>
        <EventCard title="Похід до музею" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/3.jpg" date="2020/08/16" color="#ff9c32" url = "card3"/>
        <EventCard title="Екскурсія у Львів" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/4.jpg" date="2020/10/19" color="#ff1f40" url = "card4"/>
        
    </div>
    )
}

export default eventBlock;