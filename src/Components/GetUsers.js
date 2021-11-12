import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import './Styles/ProfileCard.css'
import ProfileCard from './ProfileCard';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./firebase.js"
import Login from './Login';
import {useHistory} from 'react-router-dom';

import { doc, getDoc, setDoc, arrayUnion,updateDoc } from 'firebase/firestore';
import UserProfile from './UserProfile';


function GetUsers() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "users")
    const [name, setName] = useState("")
    const [userid, setuserId] = useState("")
    const [friendId, setFriendId] = useState("");
    const [gotProfile, setGotProfile] = useState(false);

    const [profileName, setProfileName] = useState("");





    const [Username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [game, setGame] = useState("");
    const [experience, setExperience] = useState(0);
    const [bio, setBio] = useState("");

    const [email, setEmail] = useState("");




    const history = useHistory();

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setLoggedIn(true);
                setuserId(uid);
            }
            });
    }, [])
    

    useEffect(() => {

        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setName(users.map(user => user.name));
        }
        getUser()
    }, [])

    if (!loggedIn) {
        return (
            <Login />
        )
    }

    const user = auth.currentUser;
    const uid = user.uid;

    const addFriend = async (friendId) => {
        console.log(uid);
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
            friends: arrayUnion(friendId)
        })
    }

    const renderUsers = (userName, game, experience, role, bio, newEmail ) => {
        return (
               setUsername(userName),
               setGame(game),
               setExperience(experience),
               setRole(role),
               setBio(bio),
               setEmail(newEmail),
               setGotProfile(true)
        )
    }


    if (gotProfile) {
        return (
            <div>
                <UserProfile name={Username} game={game} experience={experience} role={role} bio={bio} email={email} />
            </div>
        )
    }





    return (
        <div className="user-row">
            {users.map((user) => {
                return (
                <div>
                    {" "}
                    <ProfileCard
                        url="https://thedefiant.io/wp-content/uploads/2021/01/Screen-Shot-2021-01-13-at-12.39.11-PM.png"
                        name={user.name}
                        game={user.game}
                    />
                    <button  className="profile-btn" onClick={() => renderUsers(user.name,user.game,user.experience, user.role, user.bio, user.email)}>Profile</button>
                </div>
                );
        })}
        </div>
    );
    }

export default GetUsers;