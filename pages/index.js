import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import ImageTilesCP from "../components/ImageTiles";

export default function Home() {

      return (
        <Container className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
              <style tsx>
                  {`
                  body {
                    background: lightblue url("/home-decoration.jpeg") no-repeat fixed center;
                  }
                `}
              </style>
          </Head>

          <main className={styles.main}>
              <Container>
                  <Row className="justify-content-md-center">
                      <Col className="my-auto">
                          <h1 className="text-danger message fa-4x " >Create Your Comfort Zone.</h1>
                      </Col>
                  </Row>
              </Container>
              <Button className="btn btn-dark btn-s btn-lg pr-10 my-lg-auto">
                  Shop Now
              </Button>
              <div className="my-auto">
                  <style jsx>
                      {`
                              {
                                margin-top: auto;
                                padding: 200px;
                                width: {window.innerImage};
                                background: lightblue url("/home-background.jpeg") no-repeat fixed center;
                                                                                                                      
                              }
                            `}
                  </style>
                  <ImageTilesCP></ImageTilesCP>
              </div>

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
