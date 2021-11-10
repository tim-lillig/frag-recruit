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
import liquid from './Images/liquid.png'
import sentinels from './Images/sentinels.png'
import c9 from './Images/c9.png'
import ascend from './Images/ascend.png'
import stock from './Images/stock.png'

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
            <Link to="/register"><button className="home-btn">I'M A TEAM</button></Link>
        <Link to="/register"><button className="home-btn2">I'M A RECRUIT</button></Link>
        <h1 className="connectwith">Connect With Teams Like </h1>
        <div className="logo-row">
        <img className= "liquid" src={liquid} alt="liquid" />
        <img className= "liquid" src={sentinels} alt="liquid" />
        <img className= "liquid" src={c9} alt="liquid" />
        <img className= "liquid" src={ascend} alt="liquid" />
        </div>
        <div className="create">
          <h1>Or Create Your Own Team!</h1>
          <p>We give you the ability to create your own team and 
            <br></br>
            team up with some of the best players in the world.
            <br></br>
            No matter if you are a beginner or a professional.
            <br></br>
            Just team up and start playing!
            </p>
            <img className= "stock" src={stock} alt="stock" />
        </div>
        
    </h1>
    <img className= "logo-img" src={nodes} alt="logo" />
  </div>
</div>
    )
}

export default Home
