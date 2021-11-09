import React from 'react'
import Kayo from './Kayo.js'
import logo from "./Images/logo.png"
import ProfileCard from './ProfileCard.js'
import { Route, Link } from 'react-router-dom'
import './Styles/Home.css'
import tourney from './Images/tournament.jpg';
import background from './Images/background.png';
import grenade from './Images/grenade.png';
import celebration from './Images/celebration.jpeg';
import gamer from './Images/gamer.png';
import nodes from './Images/nodes.png'
import testing from './testing'

function Home() {
    return (
  <div className="container">
  <div className="text-block">
    <h1>GET RECRUITED
        <br/>
        <p className="paragraph">
          Connect with the top teams and players.
           <br></br>
           Weither you are looking for a team to have fun
           <br></br>
           or are looking for a team to compete in a tournament,
            <br></br>
            we provide you with the connections you need.
            </p>
        <button className="home-btn">I'M A TEAM</button>
        <button className="home-btn2">I'M A RECRUIT</button>
    </h1>
    <img className= "logo-img" src={nodes} alt="logo" />
  </div>
</div>
    )
}

export default Home
