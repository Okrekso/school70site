import React, {useState} from 'react';
import './eventBlock.scss';
import './media-style.scss';
import EventCard from './eventCard';



function eventBlock(props){

    console.log.

    return(
    <div id="eventBlock">
        <EventCard title="Відпочинок в парку" 
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" 
        imgSrc="/img/1.jpg" dateDay="13" dateMonth="April" />
        <EventCard title="Тренування в басейні" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/2.jpg" dateDay="8" dateMonth="May" />
        <EventCard title="Похід до музею" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/3.jpg" dateDay="19" dateMonth="May" />
        <EventCard title="Екскурсія у Львів" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptate voluptatibus est exercitationem at saepe tempora debitis? Voluptatem quod neque officia quae tempora facere nam soluta sit, eligendi explicabo voluptatibus!" imgSrc="img/4.jpg" dateDay="23" dateMonth="August" />
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
