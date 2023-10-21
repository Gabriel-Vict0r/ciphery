import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";
import { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
export default function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? dark : light;
  const [monted, setMonted] = useState(false);
  useEffect(() => {
    setMonted(true);
  }, [monted]);

  return (
    <ThemeProvider theme={theme!}>
      <button onClick={darkMode.toggle}></button>
      <GlobalStyle />
      {monted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}
