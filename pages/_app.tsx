import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";
import styles from "@/styles/App.module.css";
import NavBar from "@/components/NavBar";
// import { NextNProgress } from "nextjs-progressbar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title key="title">Next JS News App</title>
        <meta
          key="description"
          name="description"
          content="NextJS Crash Course by CodingFlow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NextNProgress /> */}
      <NavBar />
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
