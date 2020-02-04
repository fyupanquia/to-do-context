import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const state = {
        isAuthenticated
    };
    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    }

    return <AuthContext.Provider value={{ ...state, toggleAuth }} >
        {children}
    </AuthContext.Provider>
}


export default AuthContextProvider