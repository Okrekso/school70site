import React, {Component , useState } from 'react';
import {storage} from '../../js/firebase';
import './style.scss'

function Medallists(props) {
    const { classes } = props

	const [image, setImage] = useState(null)
	const [url, setUrl] = useState('')
	const [progress, setProgress] = useState(0)
      
    return (
      <div id='medallistsstyle'>
      <progress value={progress} max="100"/>
      <br/>
        <input id='file' type="file" value={image} onChange={handleChange}/>
        <button onClick={handleUpload}>Upload</button>
        <br/>
        <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
      </div>
    )
  
    function handleChange() {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage({image});
        }
    }

    function handleUpload() {
        // const {image} = this.state;
      
        // const uploadTask = storage.ref(`images/${image.name}`).put(image);
        // uploadTask.on(
        //     'state_changed', 
        //     (snapshot) => {
        //       // progrss function ....
        //       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        //       setProgress({progress});
        //     }, 
        //     (error) => {
        //          // error function ....
        //       console.log(error);
        //     }, 
        //     () => {
        //         // complete function ....
        //         storage.ref('images').child(image.name).getDownloadURL().then(url => {
        //             console.log(url);
        //             setUrl({url});
        //         })
        //     });
    }
}

export default Medallists;
