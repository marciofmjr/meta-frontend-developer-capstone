import Nav from "./Nav";
import Logo from './../images/logo.png';

function Header() {
  return <>
    <header className="full-section p-4 bg-teal-700">
      <div className="section-container justify-between items-center">
        <div>
          <img src={Logo} className="w-64" alt="Little Lemon Logo" />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  </>
}

export default Header;