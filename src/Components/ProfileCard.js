import React from 'react';
import './Styles/ProfileCard.css'
import Logo from './Images/logo.png'
import liquidlogo from './Images/liquid.png'




function ProfileCard(props){
    return(
        <div className='prof-container'>
        <div className='main'>
            <img className='img-box' src={props.url} alt="profile-img"/>
            <h2 className='name'>{ props.name }</h2>
            <h3 className='des'>{ props.game }</h3>
            <h3 className='des'>{ props.des }</h3>
        </div>
        </div>
    );

}

export default ProfileCard;