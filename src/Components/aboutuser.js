import React from 'react'
import './Styles/aboutuser.css'
import GetUsers from './GetUsers.js'
import SetUsers from './SetUsers'

function aboutuser() {
    return (
        <div className="about-section">
            <SetUsers />
            <h1>ABOUT</h1>
            <div className="game">
                <h1>GAME:</h1>
            </div>
            <div className="open-to">
                <h1>OPEN-TO:</h1>
            </div>
            <div className="experience">
                <h1>EXPERIENCE:</h1>
            </div>
            <div className="role">
                <h1>PREFFERED ROLE:</h1>
            </div>
        </div>
    )
}

export default aboutuser