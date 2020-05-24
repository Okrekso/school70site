import React from 'react'

import './GalleryComponent-style.scss'
import $ from 'jquery'

import GalleryPhoto from './GalleryPhoto'

export default function Gallery(){
    
    // function openImg(src){
    //     var photo = $('#photoOpen')
    //     var imageUrl = src

    //     photo.css('background-image', 'url(' + imageUrl + ')');
        

    //     if( (photoOpen).is(":visible")){
    //         $(photo).hide(2000);
    //     }else{
    //         $(photo).show(2000);
    //     }
    // }
    
    return(
        <div id = "galleryContainer">
            
            <GalleryPhoto imgSrc="https://firebasestorage.googleapis.com/v0/b/school70site.appspot.com/o/Gallery%2F1_mk1-6aYaf_Bes1E3Imhc0A.jpeg?alt=media&token=2bbb9cf6-d618-455f-9b0e-01025b99b4c9"/>
            <GalleryPhoto imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHSGbsSOYi2cda8cXr9Q5tZlANzK1QWHjq2WJziIN4URlb8BQ-&usqp=CAU"/>
            <GalleryPhoto imgSrc="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
            <GalleryPhoto imgSrc="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
            <GalleryPhoto imgSrc="https://1.bp.blogspot.com/-MdaQwrpT4Gs/Xdt-ff_hxEI/AAAAAAAAQXE/oOgnysGd9LwoFLMHJ0etngKzXxmQkWc5ACLcBGAsYHQ/s400/Beautiful-Backgrounds%2B%2528122%2529.jpg"/>
            <GalleryPhoto imgSrc="https://html5css.ru/css/paris.jpg"/>
            <GalleryPhoto imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXvqAAKGKBseWlXRPEZAqrdG_Evl-QhW2PJB7d0ylPtxvPpQhc&usqp=CAU"/>
            <GalleryPhoto imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp&usqp=CAU"/>
            <GalleryPhoto imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4X1mG09DZOKtvCPW44GPSVPOAjCuxlBPwjdLZ9ZGgAC6YLTE4&usqp=CAU"/>
            
        </div>        
    )
}