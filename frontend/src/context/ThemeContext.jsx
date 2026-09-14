import { createContext, useCallback, useEffect, useState } from "react";

export const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

const getInitialTheme = () => {
    try {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") return stored;
    } catch {
        // localStorage unavailable (private mode etc.) — fall through
    }
    return "dark";
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        const isDark = theme === "dark";

        root.classList.toggle("dark", isDark);
        root.setAttribute("data-theme", theme);
        document.body.setAttribute("data-theme", theme);

        try {
            localStorage.setItem("theme", theme);
        } catch {
            // ignore write failures
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
