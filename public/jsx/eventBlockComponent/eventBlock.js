import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
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
        <div id = "blockTitle">Не пропусти наші події</div>
        <EventCard title="Відпочинок в парку" 
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" 
            imgSrc="/img/1.jpg" 
            date="2020/05/12"
            color="#6affe8"
            url = "card1"
            />
        <EventCard title="Тренування в басейні" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/2.jpg" date="2020/07/02" color="#9967" url = "card2"/>
        <EventCard title="Похід до музею" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/3.jpg" date="2020/08/16" color="#ff9c32" url = "card3"/>
        <EventCard title="Екскурсія у Львів" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/4.jpg" date="2020/10/19" color="#ff1f40" url = "card4"/>
    </div>
    )

    // function createBlock(srcBackground, title, description, dateDay, dateMonth) {
    //     this.srcBackground = srcBackground;
    //     this.title = title;
    //     this.description = description;
    //     this.dateDay = dateDay;
    //     this.dateMonth = dateMonth;
    // }
    //
    // let block1 = new createBlock("img/1.jpg", "Відпочинок в парку", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,\n" +
    //     "                        voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque\n" +
    //     "                        officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!", "10", 'Квітня');
    // let block2 = new createBlock("img/2.jpg", "Тренування в басейні", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,\n" +
    //     "                        voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque\n" +
    //     "                        officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!", "12", "Жовтня");
    //
    // let block3 = new createBlock("img/3.jpg", "Похід до музею", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,\n" +
    //     "                        voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque\n" +
    //     "                        officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!", "8", "Вересня");
    //
    // let block4 = new createBlock("img/4.jpg", "Екскурсія у Львів", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,\n" +
    //     "                        voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque\n" +
    //     "                        officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!", "2", "Грудня");
    //
    //
    //
    // return (
    //     <div id="eventBlock">
    //         <div id="block1" className="currentEvent">
    //             <div className="eventDate"><span id="eventDateDay">{block1.dateDay}</span><br/>{block1.dateMonth}</div>
    //             <div id="backgroundImg1" className="eventImgBackground"></div>
    //             <div className="eventTitle">{block1.title}</div>
    //             <div className="eventDescription">
    //                 <div className="descriptionText"><p>{block1.description}</p></div>
    //                 <button>Читати далі</button>
    //             </div>
    //         </div>
    //         <div id="block2" className="currentEvent">
    //             <div className="eventDate"><span id="eventDateDay">{block2.dateDay}</span><br/>{block2.dateMonth}</div>
    //             <div id="backgroundImg2" className="eventImgBackground"></div>
    //             <div className="eventTitle">{block2.title}</div>
    //             <div className="eventDescription">
    //                 <div className="descriptionText"><p>{block2.description}</p></div>
    //                 <button>Читати далі</button>
    //             </div>
    //         </div>
    //         <div id="block3" className="currentEvent">
    //             <div className="eventDate"><span id="eventDateDay">{block3.dateDay}</span><br/>{block3.dateMonth}</div>
    //             <div id="backgroundImg3" className="eventImgBackground"></div>
    //             <div className="eventTitle">{block3.title}</div>
    //             <div className="eventDescription">
    //                 <div className="descriptionText"><p>{block3.description}</p></div>
    //                 <button>Читати далі</button>
    //             </div>
    //         </div>
    //         <div id="block4" className="currentEvent">
    //             <div className="eventDate"><span id="eventDateDay">{block4.dateDay}</span><br/>{block4.dateMonth}</div>
    //             <div id="backgroundImg4" className="eventImgBackground"></div>
    //             <div className="eventTitle">{block4.title}</div>
    //             <div className="eventDescription">
    //                 <div className="descriptionText"><p>{block4.description}</p></div>
    //                 <button>Читати далі</button>
    //             </div>
    //         </div>
    //
    //     </div>
    // );
}

export default eventBlock;
