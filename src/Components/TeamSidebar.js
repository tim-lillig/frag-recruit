import React from 'react'

function TeamSidebar(props) {
    return (
            <div class="sidebar">
            <img className= "scream-img" src={props.url} alt="Scream" />
            <h1 className="username">{props.name}</h1>
            <h2 className="bio">{props.des}</h2>
            </div>
    )
}

export default TeamSidebar
