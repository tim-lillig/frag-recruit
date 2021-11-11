import React from 'react'
import scream from './Images/scream.jpeg'

function Sidebar(props) {
    return (
            <div class="sidebar">
            <img className= "scream-img" src={scream} alt="Scream" />
            <h1 className="username">{props.name}</h1>
            <h2 className="bio">{props.bio}</h2>
            <br></br>
            <a class="active" href="/profile/about">About</a>
            <a href="/profile-film">Film</a>
            <a href="/profile-friends">Friends</a>
            </div>
    )
}

export default Sidebar
