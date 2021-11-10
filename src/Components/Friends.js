import React from 'react'
import { doc, getDoc } from 'firebase/firestore';
import "./firebase.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs} from 'firebase/firestore'
import RegisterUser from './RegisterUser.js'
import ProfileHeader from './ProfileHeader.js'
import Login from './Login.js'

function Friends() {
    const [name, setName] = useState("");
    const [game, setGame] = useState("");
    const [experience, setExperience] = useState(0);
    const [role, setRole] = useState("");
    const [bio, setBio] = useState("");
    const [hasInfo, setHasInfo] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);
    const [id, setid] = useState(null);

    const [users, setUsers] = useState(null);
    const [friends, setFriends] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const getProfile = async () => {
                    if (user) {
                        const uid = user.uid;
                        const docRef = doc(db, "users", uid);
                        const docSnap = await getDoc(docRef);
                        if (docSnap.exists()) {
                            setHasInfo(true);
                            const data = docSnap.data();
                            var friendArr = data.friends
                            setName(data.name);
                            setGame(data.game);
                            setExperience(data.experience);
                            setRole(data.role);
                            setBio(data.bio);
                            setHasInfo(true);
                            const updatedFriends = [...friends, friendArr];
                            setFriends(updatedFriends);
                        }
                        else {
                            return <RegisterUser />
                        }
                        
                    }
                }
                getProfile();
            });         
    }, [])

    

    console.log(friends)
    return (
        <div>
            <ProfileHeader />
            <h1>Friends</h1>
        </div>
    )
}

export default Friends
