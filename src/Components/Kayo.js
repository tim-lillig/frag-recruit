import React from 'react';
import ProfileCard from './ProfileCard';
import { Route, Link } from 'react-router-dom';
import GetUsers from './GetUsers';


function Kayo() {
  return (
    <div>
      <ProfileCard 
          imgUrl='https://cdnportal.mobalytics.gg/production/2021/06/82cd9585-kayo-splash.jpg' 
          name='Kay0' 
          designation='Valorant'
          />
    </div>
  );
}

export default Kayo;