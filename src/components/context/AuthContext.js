import React, { useEffect, useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { auth } from '../../firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { ACTION_CHECK } from '../../helpers/Const';

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);


const INIT_STATE = {
    user: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_CHECK.CHECK_USER:
            return {...state,  user: action.payload}
        default:
            return state;
    }
}








const AuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const googleProvider = new GoogleAuthProvider();

function checkUser(){
    return onAuthStateChanged(auth, (user) => {
        dispatch({
            type: ACTION_CHECK.CHECK_USER,
            payload: user
        })
    })
}

useEffect(()=>{
    checkUser();
 },[])
     


    async function signInWithGoogle() {
        try {   
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    async function logOut() {
        try {
            await signOut(auth);
            console.log("Logged out successfully");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    }
    
    const values = {
        signInWithGoogle,
        register,
        user: state.user,
        logOut
    };

    return (
        <authContext.Provider value={values}>{children}</authContext.Provider>
    );
};

export default AuthContext;
