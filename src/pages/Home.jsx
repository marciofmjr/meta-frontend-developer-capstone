import { useEffect } from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Specials from '../components/Specials';

function Home() {
  useEffect(() => {
    const scrollToId = localStorage.getItem('scrollToId');
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      localStorage.removeItem('scrollToId');
    }
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Main>
        <About />
        <Specials />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
