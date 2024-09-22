import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';

function Menu() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <PageTitle title="Menu" />
      </Main>
      <Footer />
    </>
  );
}

export default Menu;
