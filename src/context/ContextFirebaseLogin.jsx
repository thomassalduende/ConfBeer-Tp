import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';

const Context = createContext()

export const AuthFirebase = ({ children }) => {
    const [user, setUser] = useState({})

    const googleSingIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
        //signInWithPopup(auth, provider)
    }

    const Logaut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (
            currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <Context.Provider value={{ googleSingIn, Logaut, user }} >
            {children}
        </Context.Provider>
    );
}

export const AuthLogin = () => {
    return useContext(Context);
}