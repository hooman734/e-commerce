import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import PromoCardsCP from "../../components/HomePage/PromoCards";
import DropDownListCP from "../../components/Products/DropDownList";
import FootNoteCP from "../../components/Global/FootNote";

export default function Home () {
    return (
        <>
            <Head>
                <html lang="en"/>
                <title>Products</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible"/>
            </Head>

            <DropDownListCP/>

            <PromoCardsCP/>
            <div className="my-5 py-5"></div>
            <footer className="mb-n5">
                <FootNoteCP/>
            </footer>
        </>
    );
}