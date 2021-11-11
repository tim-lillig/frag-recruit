import React from 'react'
import './Styles/About.css'
import blue from './Images/blue300x.gif'

function About() {
    return (
        <div id = "big-boy">
            <h1 className="about-text">About Page</h1>
            <img className= "blue1" src={blue} alt="blue" />
            <img className= "blue2" src={blue} alt="blue" />
            <div/>
            <h1 id="abt-header">
                Frag Recruit was created for Liquid Hacks 2.0!
            </h1>
            <div/>
            <h2 id="abt-txt">
                Frag Recruit is a website designed to help you get recruited!
                With many up and coming gamers trying to play on an esports team,
                it's hard to know what to do to get your name out there against all of
                the competition. Frag Recruit allows you to connect with teams, and show off
                your skills and experience.
            </h2>
        </div>
    )
}

export default About
