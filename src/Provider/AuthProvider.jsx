import { useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.init';
import { useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // User Registration Start 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // User Registration End 

    // Login User Start 
    const loginUser = (email, password) => {   
        setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }
    // Login User End

    // Logout User Start
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Logout User End

    // Update User Profile Start
    const updateUserProfile = (displayName, photoURL) => {
       return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL 
        })
    }
    // Update User Profile End


    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)  
          setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser,
        updateUserProfile, 
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;