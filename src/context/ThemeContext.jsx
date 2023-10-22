import { ReactComponentElement, createContext, useState } from "react";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

const EditContext = createContext();

const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  return (
    <EditContext.Provider value={{ theme, setTheme }}>
      {children}
    </EditContext.Provider>
  );
};
export { AuthProvider, EditContext };