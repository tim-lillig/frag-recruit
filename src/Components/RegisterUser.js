import React from 'react'
import { Route } from 'react-router-dom'
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from './firebase.js'
import { Link } from 'react-router-dom'
import './Styles/RegisterUser.css'
<<<<<<< HEAD
import Home from './Home.js'
=======
>>>>>>> 53e7d5c40001b12a1df30d50b02ee30d50050e06

function RegisterUser() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div className="register-box">
      <div>
        <h3 className="register-text"> Register User </h3>
        <h4 className = "emailandpass"> Email: <input className = "email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        </h4>
        <h4 className = "emailandpass"> Password: <input className = "pass"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        </h4>
        <Link to="/register-info"><button className = "loginbutton" onClick={register}>Register</button></Link>
      </div>        
    </div>
  );
}

export default RegisterUser;