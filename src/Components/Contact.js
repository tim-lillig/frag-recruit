import React from 'react'
import './Styles/Contact.css'
import scream from './Images/scream.jpeg'
import tim from './Images/tim.jpg'

function Contact() {
    return (
        <div className = "contact-container">
            <h1 className = "contpagetext">Contact Us!</h1>
            
            <div className = "about-tim">
                <div className="img-box-us">
                    <img className= "pic-of-us" src={tim} alt="Tim" />
                </div>
                    <h1 className="tim-name"> Tim Lillig</h1>
                <div>
                    <a id="tim-github" href="https://github.com/timlil">github</a>
                </div> 
            <h1 className="our-text" > test text</h1>
            </div>
            

            <div className = "about-nick">
            <div className="img-box-us">
                <img className= "pic-of-us" src={scream} alt="Scream" />
                <h1 className="nick-name"> Nick Hansel</h1>
            </div> 
            <div>
                    <a id="nick-github" href="https://github.com/fr1gid">github</a>
                </div> 
            <h1 className="our-text"> test text</h1>
            </div>
        </div>
    )
}

export default Contact
