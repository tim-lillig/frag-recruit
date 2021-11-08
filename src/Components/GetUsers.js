import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import './Styles/ProfileCard.css'
import ProfileCard from './ProfileCard';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./firebase.js"
import Login from './Login';

function GetUsers() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "users")
    const [name, setName] = useState("")

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log(uid);
                setLoggedIn(true);
            }
            });
            
    }, [])

    console.log(loggedIn);

    useEffect(() => {

        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setName(users.map(user => user.name))
        }

        getUser()
    }, [])

    if (!loggedIn) {
        return (
            <Login />
        )
    }

    return (
        <div className="user-row">
            {users.map((user) => {
                return (
                <div>
                    {" "}
                    <ProfileCard
                        name={user.name}
                        game={user.game}
                    />
                </div>
                );
        })}
        </div>
    );
    }

export default GetUsers;