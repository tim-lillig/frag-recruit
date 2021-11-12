import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore'
import './Styles/SetUsers.css'
import logo from "./Images/logo.png"
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './Login';

function TeamInfo() {

    const [id, setId] = useState("");

    const auth = getAuth();
    const [newName, setNewName] = useState("");
    const [newExperience, setNewExperience] = useState(0);
    const [newGame, setNewGame] = useState("");
    const [newDes, setnewDes] = useState("");
    const [newNeeded, setNewNeeded] = useState("");
    const [email, setEmail] = useState("");

    const user = auth.currentUser;

    const createUser = async () =>  {
        const uid = user.uid;
        const docRef = doc(db, "teams", uid);
        await setDoc(docRef, {
            name: newName,
            game: newGame,
            des: newDes,
            needed: newNeeded,
            email: email,
        })
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
            <label className="labels" for="myform">Game </label>
            <input className="inputs" placeholder="Game..." onChange={(event) => {setNewGame(event.target.value)}}/>
            </div>
            <br></br>
            <div className="myform">
            <label className="labels" for="myform">Designation </label>
            <input className="inputs" placeholder="Role..." onChange={(event) => {setnewDes(event.target.value)}}/>
            </div>
            <br></br>
            <div>
            <label className="labels" for="myform">Role-Needed </label>
            <textarea className="bio-input"placeholder="Bio..." onChange={(event) => {setNewNeeded(event.target.value)}}/>
            </div>
            <br></br>
            <div>
            <Link to="/login"><button className="btn" onClick={createUser}> Create Account </button></Link>
            </div>
        </div>
    )
}

export default TeamInfo;