import { ReactComponentElement, createContext, useState } from "react";

const EditContext = createContext();

const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  return (
    <EditContext.Provider value={{ theme, setTheme }}>
      {children}
    </EditContext.Provider>
  );
};
export { AuthProvider, EditContext };
