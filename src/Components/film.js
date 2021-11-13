import React from 'react'
import ProfileHeader from './ProfileHeader'
import './firebase'
import ReactPlayer from 'react-player'
import './Styles/Film.css'
import Sidebar from './Sidebar'

function Film(props) {

    return (
        <div>
            <ProfileHeader
             />
            <div className="video-player">
            <ReactPlayer className='video' url={props.vid}/>
            </div>
    </div>
    )
}

export default Film
