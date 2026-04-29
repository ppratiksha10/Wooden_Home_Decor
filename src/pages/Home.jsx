import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
function Home()
{
    const { theme }= useContext(ThemeContext)
    return(
        <>
        <div
      style={{
        height: "200px",
        padding: "20px",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}>

      </div>
            <h1>Home us</h1>
            <p>Current Theme: {theme}</p>
        </>
    )
}
export default Home;