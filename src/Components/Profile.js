import React from 'react'
import { doc, getDoc } from 'firebase/firestore';
import "./firebase.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import RegisterUser from './RegisterUser.js'

function Profile() {
    const [name, setName] = useState("");
    const [game, setGame] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [id, setid] = useState(null);

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


    useEffect(() => {
        
        const getProfile = async () => {
            if (user) {
                const uid = user.uid;
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);
                setName(docSnap.data().name);
                setGame(docSnap.data().game);

                if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            }
        }
        getProfile();
    }, [])



    return (
        <div>
            <h1>{name}</h1>
            <h1>{game}</h1>
        </div>
    )
}

export default Profile
