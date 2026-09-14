import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="cursor-pointer p-2 rounded-full border border-purple-500/50 hover:bg-purple-500 hover:text-white text-inherit transition-colors duration-200 flex items-center justify-center"
            style={{ fontSize: "1.25rem" }}
        >
            {isDark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
    );
};

export default ThemeToggle;
