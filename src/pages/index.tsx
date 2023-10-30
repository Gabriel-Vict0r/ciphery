import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import Link from "next/link";
import GlobalStyle from "../styles/GlobalStyle";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { EditContext } from "../context/ThemeContext";
import Content from "../components/Content/index";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useContext(EditContext);

  return (
    <ThemeProvider theme={theme!}>
      <GlobalStyle />
      <Head>
        <title>Ciphery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Content />
      </main>
    </ThemeProvider>
  );
}
