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
                <h1 className="tim-text">
            About me
            <br></br>
            <br></br>
            Hi! my name is Tim, I am a
            CS student at the University of Iowa.
            I've been a gamer almost all of my life
            and have always been a big fan of esports!
            It has been great to work on something 
            that could benefit esports community while
            working on my skills as a coder and artist.
            </h1>
            </div>
            

            <div className = "about-nick">
            <div className="img-box-us">
                <img className= "pic-of-us" src="https://media-exp1.licdn.com/dms/image/C4E03AQGPwcxf9zJOsw/profile-displayphoto-shrink_800_800/0/1621448810642?e=1642032000&v=beta&t=jcbM81u6TiGQaPi_D7gB450IKuU3SPnJEenvKFXTi-o" alt="Scream" />
                <h1 className="nick-name"> Nick Hansel</h1>
            </div> 
            <div>
                <a id="nick-github" href="https://github.com/fr1gid">github</a>
                </div> 
            <h1 className="our-text">
            About me
            <br></br>
            <br></br>
            Hello my name is Nick and
            I am a Computer Science
            Student at the University of
            Iowa. I am a full-stack developer
            specializing in back end and mobile
            development. I really just want to
            make some cool stuff!
            </h1>
            </div>
        </div>
    )
}

export default Contact
