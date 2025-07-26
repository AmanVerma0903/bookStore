import React,{createContext} from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [authUser, setauthUser] = useState(undefined);
    
    useEffect(() => {
        const storedUser = localStorage.getItem("User");
        let initialAuthUser;
        try {
            initialAuthUser = (storedUser && storedUser !== "undefined") ? JSON.parse(storedUser) : undefined;
        } catch {
            initialAuthUser = undefined;
        }
        setauthUser(initialAuthUser);
    }, []);
    
    return(
        <AuthContext.Provider value={[authUser, setauthUser]}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);