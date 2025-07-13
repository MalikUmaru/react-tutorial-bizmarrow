import React from "react";
import {createContext, useState} from "react";

//initialize/ create a context 
export const ThemeContext = createContext();

//provide the data
export const ThemeProvider = ({children})=>{
    //initial the theme state(light or dark mode)
    const [isDark, setIsDark] = useState(false);

    //handle the toggle functionality
    const toggleTheme = ()=> setIsDark(prev => !prev);

    //return the data
    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}