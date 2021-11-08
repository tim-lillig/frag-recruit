import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useState, Redirect } from "react";
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from './firebase.js'
import './Styles/Login.css'
import RegisterUser from './RegisterUser'
import Home from './Home'

function Login() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

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

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    }
  }, [user]);

  if (loggedIn) {
    return <Home/>
  } 

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

      <h5 className="user-li"> User Logged In: {user?.email}</h5>

      <button className="sign-out" onClick={logout}> Sign Out </button>
    </div>
  );
        }

export default Login
