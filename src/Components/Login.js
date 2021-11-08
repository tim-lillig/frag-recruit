import React from 'react'
import { Route } from 'react-router-dom'
import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from './firebase.js'
import './Styles/Login.css'

function Login() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div className="login-box">
        <h3 className="logintext"> User Log In </h3>
        <div>
        <h4 className = "emailandpass"> Email: <input className = "email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        </h4>
        </div>
        <div>
        <h4 className = "emailandpass"> Password: <input className="pass"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        </h4>
        </div>
        <button className = "loginbutton" onClick={login}> Login</button>
        <h4 className = "dhatext">Dont have an account? <Link to="/register" className="registerbutton">Register here!</Link></h4>
      </div>

      <h5> User Logged In: </h5>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Login
