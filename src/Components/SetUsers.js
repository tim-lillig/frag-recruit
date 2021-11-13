import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore'
import './Styles/SetUsers.css'
import logo from "./Images/logo.png"
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './Login';

function SetUsers() {

    const [id, setId] = useState("");

    const auth = getAuth();
    const [newName, setNewName] = useState("");
    const [newExperience, setNewExperience] = useState(0);
    const [newGame, setNewGame] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newBio, setNewBio] = useState("");
    const [newUrl, setNewUrl] = useState("");

    const user = auth.currentUser;

    const createUser = async () =>  {
        if (user) {
          const uid = user.uid;
        const docRef = doc(db, "users", uid);
        await setDoc(docRef, {
            name: newName,
            experience: newExperience,
            game: newGame,
            role: newRole,
            bio: newBio,
            friends: [""],
            url: newUrl,
        })
        }
    }


    return (
        <div className="myform">
            <img src={logo} alt="logo" className="logo-img1" />
            <h1 className="register-heading">Register</h1>
            <div className="myform">
            <label className="labels" for="myform">Name </label>
            <input className="inputs" placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/>
            </div>
            <br></br>
            <div className="myform">
            <label className="labels" for="myform">Experience </label>
            <input className="inputs" type="number" placeholder="Experience..." onChange={(event) => {setNewExperience(event.target.value)}}/>
            </div>
            <br></br>
            <div className="myform">
            <label className="labels" for="myform">Game </label>
            <input className="inputs" placeholder="Game..." onChange={(event) => {setNewGame(event.target.value)}}/>
            </div>
            <br></br>
            <div className="myform">
            <label className="labels" for="myform">Role </label>
            <input className="inputs" placeholder="Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
            </div>
            <br></br>
            <div>
            <label className="labels" for="myform">Profile Picture URL </label>
            <input className="inputs"placeholder="Profile Picture URL..." onChange={(event) => {setNewUrl(event.target.value)}}/>
            </div>
            <br></br>
            <div>
            <label className="labels" for="myform">Bio </label>
            <textarea className="bio-input"placeholder="Bio..." onChange={(event) => {setNewBio(event.target.value)}}/>
            </div>
            <br></br>
            <div>
            <Link to="/login"><button className="btn" onClick={createUser}> Create Account </button></Link>
            </div>
        </div>
    )
}

export default SetUsers
