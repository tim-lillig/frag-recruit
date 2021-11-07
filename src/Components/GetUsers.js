import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import './Styles/ProfileCard.css'
import ProfileCard from './ProfileCard';

function GetUsers() {
    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "users")
    const [name, setName] = useState("")

    useEffect(() => {

        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setName(users.map(user => user.name))
        }

        getUser()
    }, [])
    return (
        <div className="user-row">
            {users.map((user) => {
                return (
                <div>
                    {" "}
                    <ProfileCard
                        name={user.name}
                        game={user.game}
                    />
                </div>
                );
        })}
        </div>
    );
};

export default GetUsers;