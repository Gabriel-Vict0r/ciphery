import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";
import { useState, useEffect, useContext } from "react";
import useDarkMode from "use-dark-mode";
import { AuthProvider, EditContext } from "../context/ThemeContext";
export default function App({ Component, pageProps }: AppProps) {
  // const theme = darkMode.value ? dark : light;
  const [monted, setMonted] = useState(false);
  useEffect(() => {
    setMonted(true);
  }, [monted]);
  // console.log(darkMode.value, theme);
  return (
    <AuthProvider>
        {/* <button onClick={darkMode.toggle}></button> */}
        {monted && <Component {...pageProps} />}
    </AuthProvider>
  );
}
