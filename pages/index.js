import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageTilesCP from "../components/HomePage/ImageTiles";
import FirstViewCP from "../components/HomePage/FirstView";

export default function Home() {

      return (
        <Container className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />

          </Head>

          <main className={styles.main}>
              <FirstViewCP></FirstViewCP>


          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
          </footer>
        </Container>
      )
}
