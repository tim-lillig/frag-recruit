import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import "./SetUsers.css"

function SetUsers() {

    const userCollectionRef = collection(db, "users")

    const [newName, setNewName] = useState("");
    const [newExperience, setNewExperience] = useState(0);
    const [newGame, setNewGame] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newBio, setNewBio] = useState("");

    const createUser = async () =>  {
        await addDoc(userCollectionRef, {
            name: newName,
            experience: newExperience,
            game: newGame,
            role: newRole,
            bio: newBio
        })
    }

    const onClick= () => {
        createUser();
     }

    return (
        <div className="myform">
            <div className="myform">
            <label for="myform">Name </label>
            <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/>
            </div>
            <br></br>
            <div className="myform">
            <label for="myform">Experience </label>
            <input type="number" placeholder="Experience..." onChange={(event) => {setNewExperience(event.target.value)}}/>
            </div>
            <br></br>
            <div className="myform">
            <label for="myform">Game </label>
            <input placeholder="Game..." onChange={(event) => {setNewGame(event.target.value)}}/>
            </div>
            <br></br>
            <div className="myform">
            <label for="myform">Role </label>
            <input placeholder="Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
            </div>
            <br></br>
            <div>
            <label for="myform">Bio </label>
            <textarea className="bio-input"placeholder="Bio..." onChange={(event) => {setNewBio(event.target.value)}}/>
            </div>
            <br></br>
            <div>
            <button className="btn" onClick={onClick}> Create Account </button>
            </div>
        </div>
    )
}

export default SetUsers
