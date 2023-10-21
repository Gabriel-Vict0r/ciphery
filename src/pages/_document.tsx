import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyle from "../styles/GlobalStyle";

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
