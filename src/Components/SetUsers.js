import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { Form } from 'react-bootstrap';

function SetUsers() {

    const userCollectionRef = collection(db, "users")

    const [newName, setNewName] = useState("");
    const [newExperience, setNewExperience] = useState(0);
    const [newGame, setNewGame] = useState("");
    const [newRole, setNewRole] = useState("");

    const createUser = async () =>  {
        await addDoc(userCollectionRef, {
            name: newName,
            experience: newExperience,
            game: newGame,
            role: newRole
        })
    }

    const clearForm = () => {
        document.getElementById("myForm").reset(); 
        this.setState({
            name: "",
            experience: 0,
            game: "",
            role: ""
        })
      }

    return (
        <div>
            <form id="myform">
            <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/>
            <input type="number" placeholder="Experience..." onChange={(event) => {setNewExperience(event.target.value)}}/>
            <input placeholder="Game..." onChange={(event) => {setNewGame(event.target.value)}}/>
            <input placeholder="Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
            <button onClick={createUser}> Create User </button>
            </form>
        </div>
    )
}

export default SetUsers