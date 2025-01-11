import { createContext, useEffect, useState } from "react";
import { ThemeContextData, ThemeProviderProps } from "../types/Theme";

export const ThemeContext = createContext<ThemeContextData>({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [ theme, setTheme ] = useState<string>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'theme';
    });

    useEffect(() => {
        const body = document.body;
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}