export interface ThemeContextData {
    theme: string;
    toggleTheme: () => void;
};

export interface ThemeProviderProps {
    children: React.ReactNode;
};