import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return <>
    <Header />
    <Banner />
    <Main>
      <h1>HOME</h1>
    </Main>
    <Footer />
  </>
}

export default Home;