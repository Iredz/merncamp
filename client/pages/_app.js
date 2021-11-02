import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/Nav';
import Head from "next/head";


function myApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/styles.css" />
            </Head>
            <Nav />
            <Component {...pageProps} />
        </>
    );
}

export default myApp;