import React from 'react'
import ProfileHeader from './ProfileHeader'
import TeamSidebar from './TeamSidebar'

function TeamProfile(props) {
    return (
        <div className="big-about">
            <TeamSidebar
                {...props}
             />
            <div className="about-section">
                <h1 className="about-text"> About: </h1>
                <h1 className="info">Team Name: {props.name}</h1>
                <h1 className="info">Designation: {props.des}</h1>
                <h1 className="info">Game: {props.game}</h1>
                <h1 className="info">Role-Needed: {props.needed}</h1>
            </div>
        </div>
    )
}

export default TeamProfile
