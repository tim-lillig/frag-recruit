import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

function GetUsers() {
    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "users")

    useEffect(() => {

        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }

        getUser()
    }, [])
    return (
        <div>
            {users.map((user) => {
                return (
                <div>
                    {" "}
                    <h1>Name: {user.name}</h1>
                    <h1>Experience: {user.experience}</h1>
                    <h1>Game: {user.game}</h1>
                    <h1>Role: {user.role}</h1>
                    </div>
                );
        })}
        </div>
    );
};

export default GetUsers;