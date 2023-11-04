import {
  ReactComponentElement,
  createContext,
  useState,
  useEffect,
} from "react";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

const EditContext = createContext();

const AuthProvider = ({ children }) => {
  useEffect(() => {
    const isDark = localStorage.getItem("theme");
    console.log("isdark", isDark);
    function checkTheme() {
      if (isDark === null) {
        setTheme(dark);
      } else if (isDark === "dark") {
        setTheme(dark);
      } else {
        setTheme(light);
      }
    }
    checkTheme();
  }, []);
  const [theme, setTheme] = useState();
  return (
    <EditContext.Provider value={{ theme, setTheme }}>
      {children}
    </EditContext.Provider>
  );
};
export { AuthProvider, EditContext };
