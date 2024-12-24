import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [themeMode, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{themeMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}