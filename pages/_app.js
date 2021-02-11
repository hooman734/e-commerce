import '../styles/globals.css'
import NavbarCP from "../components/Navbar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavbarCP/>
            <Component {...pageProps} />
        </>
    );

}

export default MyApp