import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import ReservationForm from '../components/ReservationForm';

function Reservations() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <PageTitle title="Reservations" />
        <ReservationForm />
      </Main>
      <Footer />
    </>
  );
}

export default Reservations;
