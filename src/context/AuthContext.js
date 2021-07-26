import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../Firebase'
import Login from './../pages/TestLogin';

const AuthContext =  React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setcurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function Signup(email, password){
       return auth.createUserWithEmailAndPassword(email, password)
    }

    function Login(email, password){
        return auth.signInWithEmailAndPassword(email,password)
    }

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{

        setcurrentUser(user)
        setLoading(false)
        
    })

    return unsubscribe
   }, [])

    const value = {
        currentUser,
        Login,
        Signup
        
    }
    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
