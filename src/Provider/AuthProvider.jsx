import { useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.init';
import { useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // User Registration Start 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // User Registration End 

    // Login User Start 
    const loginUser = (email, password) => {   
     return signInWithEmailAndPassword(auth, email, password)
    }
    // Login User End



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
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;