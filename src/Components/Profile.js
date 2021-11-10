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
import { useHistory } from 'react-router-dom';

function Profile() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userid, setuserId] = useState("")

    const [name, setName] = useState("");
    const [game, setGame] = useState("");
    const [experience, setExperience] = useState(0);
    const [role, setRole] = useState("");
    const [bio, setBio] = useState("");

    const auth = getAuth();
    const user = auth.currentUser;
    let history = useHistory();


    
    console.log(user);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setLoggedIn(true);
                setuserId(uid);
                console.log(userid);
            }
            });
    }, [])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const getProfile = async () => {
                    if (user) {
                        setLoggedIn(true);
                        const uid = user.uid;
                        const docRef = doc(db, "users", uid);
                        const docSnap = await getDoc(docRef);
                        if (docSnap.exists()) {
                            const data = docSnap.data();
                            setName(data.name);
                            setGame(data.game);
                            setExperience(data.experience);
                            setRole(data.role);
                            setBio(data.bio);
                        }
                    }
                }
                getProfile();
            });         
    }, [])


    console.log(loggedIn);



    if (!loggedIn) {
        return <Login/>
      }

    return (
        <div className="big-about">
            <ProfileHeader />
            <div className="about-section">
                <h1 className="about-text"> About: </h1>
                <h1 className="info">Name: {name}</h1>
                <h1 className="info">Game: {game}</h1>
                <h1 className="info">Experience: {experience} years</h1>
                <h1 className="info">Role: {role}</h1>
                <h1 className="info">Bio: {bio}</h1>
            </div>
        </div>
    )
}

export default Profile
