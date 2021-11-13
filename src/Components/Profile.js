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
import Sidebar from './Sidebar.js'
import ReactPlayer from 'react-player'

function Profile(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userid, setuserId] = useState("")

    const [name, setName] = useState("");
    const [game, setGame] = useState("");
    const [experience, setExperience] = useState(0);
    const [role, setRole] = useState("");
    const [bio, setBio] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [profileUrl, setProfileUrl] = useState("");
    const userCollectionRef = collection(db, "users")
    const [videos, setVideos] = useState("");
    const [vids, setVids] = useState("");

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
                        setUserEmail(user.email)
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
                            setProfileUrl(data.url)
                        }
                    }
                }
                getProfile();
            });         
    }, [])



    if (!loggedIn) {
        return <Login/>
      }

    return (
        <div className="big-about">
            <Sidebar
            name = {name}
            game = {game}
            bio = {bio}
            url = {profileUrl}
            />
            <div className="about-section">
                <h1 className="about-text"> About: </h1>
                <h1 className="info">Name: {name}</h1>
                <h1 className="info">Game: {game}</h1>
                <h1 className="info">Experience: {experience} years</h1>
                <h1 className="info">Role: {role}</h1>
                <h1 className="info">Bio: {bio}</h1>
                <h1 className="info">Email: {userEmail}</h1>
            </div>
            <div className="video-player">
            <ReactPlayer className='video' url='https://www.youtube.com/watch?v=TN2XwlMylQg'/>
            <ReactPlayer className='video' url='https://www.youtube.com/watch?v=jIDC7asItJQ'/>
            </div>
        </div>
        
        
    )
}

export default Profile
