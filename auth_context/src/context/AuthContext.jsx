import { createContext, useState } from 'react';

// Stores Token
export const AuthContext = createContext('');

export const AuthTokenProvider = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState('');

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

    const handleTokenChange = (value) => {
        setToken(value)
    }

    return <AuthContext.Provider value={{isAuth, toggleAuth, token, handleTokenChange}}>{children}</AuthContext.Provider>
}
