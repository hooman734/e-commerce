import Head from 'next/head'
import NavbarCP from "../../components/Navbar";

export default function Home () {
    return (
        <>
            <Head>
                <title>Payment</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello from payment</h1>
        </>
    );
}