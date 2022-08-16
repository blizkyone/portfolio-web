import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Paolo Lago Portfolio" />
        {/* <link rel="shortcut icon" href="/favicon.png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
