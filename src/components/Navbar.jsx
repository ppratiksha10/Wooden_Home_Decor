import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";


function Navbar() {
  const { theme, themeToggle } = useContext(ThemeContext);
    const { username } = useContext(UserContext);
 const { t, i18n } = useTranslation();
console.log("Current Lang:", i18n.language);

  return (
    
    <nav
      style={{
        padding: "10px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
        
       <Link to="/">{t("home")}</Link> |{" "}
      <Link to="/about">{t("about")}</Link> |{" "}
      <Link to="/contact">{t("contact")}</Link> |{" "}
      <Link to="/login">{t("login")}</Link>
      <LanguageSwitcher />
      

      <button onClick={themeToggle} style={{ marginLeft: "20px" }}>
        Switch To {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
    
  );
}

export default Navbar;