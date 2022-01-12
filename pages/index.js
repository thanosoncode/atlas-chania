import Head from "next/head";
import About from "../components/About";
import Classes from "../components/Classes";
import CTA from "../components/CTA";
import Header from "../components/Header";
import Nav from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { ContextProvider } from "../components/Context";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atlas Chania</title>
        <meta name="description" content="Your favorite gym in Chania" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <ContextProvider>
        <Nav />
        <Header />

        <About />
        <Classes />
        <CTA />
        <Gallery />
        <Contact />
        <Footer />
      </ContextProvider>
    </>
  );
}
