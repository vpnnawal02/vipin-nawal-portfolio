import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} style={{ fontSize: "1.7rem" }} className="cursor-pointer">
            {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
    );
};

export default ThemeToggle;
