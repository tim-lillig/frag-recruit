import React from 'react'
import ProfileHeader from './ProfileHeader'
import './firebase'
import {useState} from 'react'
import { getStorage, ref, uploadBytes } from "firebase/storage";

function Film() {

    const storage = getStorage();

    const [image , setImage] = useState('');
    const upload = ()=>{
        if(image == null)
            return;
        ref(storage, `/images/${image.name}`).then(
            uploadBytes(storage, image, {contentType: image.type})
        ).then(
            (snapshot)=>{
                console.log(snapshot);
            }
        )
    }

    return (
        <div>
            <ProfileHeader />
            <center>
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
            <button onClick={upload}>Upload</button>
            </center>
    </div>
    )
}

export default Film
