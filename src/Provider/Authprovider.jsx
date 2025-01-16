import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext= createContext(null);

const Authprovider = ({children}) => {
    const [user,setUser] =useState(null)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
      const unSubsribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('observing current User inSide Use effect',currentUser);
        })
        return ()=>{
            unSubsribe();
        }
    },[])
    const authInfo = { user,createUser,signInUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;

Authprovider.propTypes={
    children:PropTypes.node
}