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
import TeamProfile from './TeamProfile';

import { doc, getDoc, setDoc, arrayUnion,updateDoc } from 'firebase/firestore';
import UserProfile from './UserProfile';

function Teams() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "teams")
    const [name, setName] = useState("")
    const [userid, setuserId] = useState("")


    const [username, setUsername] = useState("")
    const [des, setDes] = useState("")
    const [needed, setNeeded] = useState("")
    const [url, setUrl] = useState("")
    const [game, setGame] = useState("")
    const [gotProfile, setGotProfile] = useState(false)



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

    const renderTeams = (des, game, teamName, needed, link) => {
        return (
            setUsername(teamName),
            setDes(des),
            setGame(game),
            setNeeded(needed),
            setUrl(link),
            setGotProfile(true)
        )
    }

    if (gotProfile) {
        return (
            <TeamProfile

                name={username}
                des={des}
                game={game}
                needed={needed}
                url={url}
            />
        );
    };
    const user = auth.currentUser;
    const uid = user.uid;

    return (
        <div className="user-row">
            {users.map((user) => {
                return (
                <div>
                    {" "}
                    <ProfileCard
                        url={user.url}
                        name={user.name}
                        game={user.game}
                        des={user.des}
                    />
                    <button  onClick={() => renderTeams(user.des,user.game,user.name, user.needed, user.url)}>{user.id}</button>
                </div>
                );
        })}
        </div>
    );
    }

export default Teams;