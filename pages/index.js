import Head from 'next/head';

import Nav from 'components/Nav';
import Header from 'components/Header';
import About from 'components/About';
import Skills from 'components/Skills';
import Work from 'components/Work';
import Showcase from 'components/Showcase';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clement Izard</title>
        <meta name="description" content="Fullstack engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Showcase />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
