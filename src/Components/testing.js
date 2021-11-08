import React from 'react'
import Login from './Login'
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './firebase'
import { auth } from './firebase.js'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

function Testing() {
    const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user) {
        setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [])

    console.log(loggedIn);

    if (loggedIn) {
        return <Redirect to='/users' />;
    } else {
        return <Redirect to='/register' />;
    }
}

export default Testing
