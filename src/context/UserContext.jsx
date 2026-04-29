import { createContext, useState } from "react";

// create context
export const UserContext = createContext();

//create provider

export const UserProvider = ({ children }) => {
  const [username, setUserName] = useState("Prateeksha");

  return (
    <UserContext.Provider value={{ username, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};