import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [ isLightTheme, setIsLightTheme ] = useState(false);
    const state = {
        isLightTheme,
        light: { syntax: '#555', ui: '#ddd', bg:'#eee' },
        dark: {syntax: '#ddd',  ui:'#333', bg:'#555'}
    };
    const toogleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    return <ThemeContext.Provider value={{ ...state, toogleTheme}} >
        {children}
    </ThemeContext.Provider>
}


export default ThemeContextProvider