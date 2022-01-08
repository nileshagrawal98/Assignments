import { createContext, useState } from "react";

export const AuthContext = createContext({token: '', setToken: () => {}});

export const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState();

    const handleToken = (value) => {
        setToken(value);
    }

    return <AuthContext.Provider value={{token, handleToken}}>{children}</AuthContext.Provider>
}