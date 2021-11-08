
import './Styles/ProfileHeader.css'
import scream from './Images/scream.jpeg'
import { Route, Link} from 'react-router-dom';
import React from 'react'
import { doc, getDoc } from 'firebase/firestore';
import "./firebase.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

function ProfileHeader() {

    const [name, setName] = useState("");
    const [game, setGame] = useState("");
    const [experience, setExperience] = useState(0);
    const [role, setRole] = useState("");
    const [bio, setBio] = useState("");

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const getProfile = async () => {
                    if (user) {
                        const uid = user.uid;
                        const docRef = doc(db, "users", uid);
                        const docSnap = await getDoc(docRef);
                        setName(docSnap.data().name);
                        setGame(docSnap.data().game);
                        setExperience(docSnap.data().experience);
                        setRole(docSnap.data().role);
                        setBio(docSnap.data().bio);
        
                        if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                        } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                        }
                    }
                }
                getProfile();
            });         
    }, [])

    const user = auth.currentUser;

    return (
        <div class="sidebar">
            <img className= "scream-img" src={scream} alt="Scream" />
            <h1 className="username">{name}</h1>
            <h2 className="bio">{bio}</h2>
            <br></br>
            <a class="active" href="/profile/about">About</a>
            <a href="/profile-film">Film</a>
            <a href="/profile-friends">Friends</a>
        </div>
    );
};

export default ProfileHeader;
