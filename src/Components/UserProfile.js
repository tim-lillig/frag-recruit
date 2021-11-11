import React from 'react'
import ProfileHeader from './ProfileHeader'

function UserProfile(props) {
    return (
        <div className="big-about">
            <ProfileHeader />
            <div className="about-section">
                <h1 className="about-text"> About: </h1>
                <h1 className="info">Name: {props.name}</h1>
                <h1 className="info">Game: {props.game}</h1>
                <h1 className="info">Experience: {props.experience} years</h1>
                <h1 className="info">Role: {props.role}</h1>
                <h1 className="info">Bio: {props.bio}</h1>
            </div>
        </div>
    )
}

export default UserProfile
