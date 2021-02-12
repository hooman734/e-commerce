import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageTilesCP from "../components/HomePage/ImageTiles";
import TopViewCP from "../components/HomePage/TopView";
import SecondViewCP from "../components/HomePage/BottomView";
import * as React from "react";
import BottomViewCP from "../components/HomePage/BottomView";
import FootNoteCP from "../components/Global/FootNote";
import PromoCardsCP from "../components/HomePage/PromoCards";

export default function Home() {

      return (
          <>
              <Head>
                  <title>Create Next App</title>
                  <link rel="icon" href="/favicon.ico" />
                  <link
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                  />
              </Head>

              <TopViewCP/>

              <BottomViewCP/>

              <PromoCardsCP/>

              <footer>
                <FootNoteCP/>
              </footer>
          </>
      );
}
