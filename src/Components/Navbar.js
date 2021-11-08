import React from 'react'
import { Link } from 'react-router-dom';
import "./Styles/Navbar.css"
import logo from "./Images/logo.png"
import avatar from "./Images/avatar.jpg"

function Navbar() {
    return (
        <div class="topnav">
            <Link to="/"><img className= "logo1" src={logo} alt="Logo" /></Link>
            <b><Link to="/about">About</Link></b>
            <b><Link to="/contact">Contact</Link></b>
            <b><Link to="/login">Log In/Sign Up</Link></b>
            <Link to="/contact"><img className= "avatar-class" src={avatar} alt="Avatar" /></Link>
        </div>
    );
};

export default Navbar;