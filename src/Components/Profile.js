import React from 'react'
import { doc, getDoc } from 'firebase/firestore';
import "./firebase.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import RegisterUser from './RegisterUser.js'
import ProfileHeader from './ProfileHeader.js'
import './Styles/Profile.css'
import Login from './Login.js'

function Profile() {

    
    const [name, setName] = useState("");
    const [game, setGame] = useState("");
    const [experience, setExperience] = useState(0);
    const [role, setRole] = useState("");
    const [bio, setBio] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);
    const [id, setid] = useState(null);

    const auth = getAuth();
    const user = auth.currentUser;
    
    console.log(user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const getProfile = async () => {
                    if (user) {
                        setLoggedIn(true);
                        console.log(loggedIn);
                        const uid = user.uid;
                        const docRef = doc(db, "users", uid);
                        const docSnap = await getDoc(docRef);
                        setName(docSnap.data().name);
                        setGame(docSnap.data().game);
                        setExperience(docSnap.data().experience);
                        setRole(docSnap.data().role);
                        setBio(docSnap.data().bio);
                    }
                }
                getProfile();
            });         
    }, [])

    if (!loggedIn) {
        return <Login/>
      }



    return (
        <div className="about-section">
            <ProfileHeader />
            <h1 className="info">Name: {name}</h1>
            <h1 className="info">Game: {game}</h1>
            <h1 className="info">Experience: {experience}</h1>
            <h1 className="info">Role: {role}</h1>
            <h1 className="info">Bio: {bio}</h1>
        </div>
    )
}

export default Profile
