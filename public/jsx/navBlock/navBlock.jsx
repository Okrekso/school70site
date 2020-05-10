import React from 'react'

import './navBlock-style.scss'

export default function NavBlock(){
    return(
        <div id = "navBlockContainer">
            <div className = "navCard" style = {{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/school70site.appspot.com/o/nav%2Fcources.PNG?alt=media&token=5a628bab-6831-4b86-a4ef-d6be5975d474)"}}>COURCES</div>
            <div className = "navCard" style = {{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/school70site.appspot.com/o/nav%2FPrices.PNG?alt=media&token=ae21455a-7220-4cba-8188-b5943e57bf82)"}}>PRICES</div>
            <div className = "navCard" style = {{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/school70site.appspot.com/o/nav%2FEvents.PNG?alt=media&token=0d44e4a2-33b5-4331-bceb-ca15c4d91bb1)"}}>Events</div>
            <div className = "navCard" style = {{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/school70site.appspot.com/o/nav%2FTeachers.PNG?alt=media&token=c9604a71-d8c5-4634-990a-5c1aa04e761c)"}}>TEACHERS</div>
        </div>
    )
}