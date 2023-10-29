import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          as="font"
          type="font/wff"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <script src="http://localhost:8097" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
