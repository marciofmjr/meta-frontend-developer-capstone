import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Specials from '../components/Specials';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <Specials />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
