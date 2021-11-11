import React from 'react'
import ProfileHeader from './ProfileHeader'
import './firebase'
import ReactPlayer from 'react-player'
import './Styles/Film.css'
import Sidebar from './Sidebar'

function Film() {

    return (
        <div>
            <ProfileHeader
             />
            <div className="video-player">
            <ReactPlayer className='video' url='https://www.youtube.com/watch?v=TN2XwlMylQg'/>
            <ReactPlayer className='video' url='https://www.youtube.com/watch?v=jIDC7asItJQ'/>
            </div>
    </div>
    )
}

export default Film
