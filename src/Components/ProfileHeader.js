import React from 'react'
import './Styles/ProfileHeader.css'
import scream from './Images/scream.jpeg'
import { Route, Link} from 'react-router-dom';

function ProfileHeader() {
    return (
        <div class="sidebar">
            <img className= "scream-img" src={scream} alt="Scream" />
            <h1 className="username">Scream</h1>
            <h2 className="bio">i m screem and i kill peoples. i will kill u 2.</h2>
            <br></br>
            <a class="active" href="/profile/about">About</a>
            <a href="/profile/film">Film</a>
            <a href="/profile/friends">Friends</a>
        </div>
    );
};

export default ProfileHeader;
