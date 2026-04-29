import { createContext, useState} from "react";

//create a context 
export const ThemeContext = createContext();
//create a Provider component -  A Provider component in React (Context API) is simply a wrapper component that “provides” data to all its child components without passing props manually.

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // 3. Toggle function (MUST be inside component)
  const themeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 4. Return provider
  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};