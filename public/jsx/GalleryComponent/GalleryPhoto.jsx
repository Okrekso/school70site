import React, { useState, useRef } from 'react'
import $ from 'jquery'

import './GalleryPhoto-style.scss'

export default function GalleryPhoto(props){
    
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const bigImageRef = useRef();

    function openPhoto(){
        var bigImage = $(bigImageRef.current);
        var isOpened = false;
        bigImage.show(1000);
        // if(!isOpened){
        //     bigImage.show(1000);
        // }
        
    }
    function closePhoto(){
        
    }


    return(
        <div id = "containerPhoto">
            <img id = "photo" src = {`${imgSrc}`} onClick = {openPhoto}/>
            <div ref={bigImageRef} id = "bigImage">
                <div id = "imgContainer">
                    <img src = {`${imgSrc}`} onClick = {closePhoto}/>
                </div>
            </div>
        </div>
    )
}