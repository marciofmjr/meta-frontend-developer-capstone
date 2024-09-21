import logo from "./../images/logo.png";

function FooterTitle(props) {
  return (
    <>
      <h6 className="font-bold text-lime-300">{props.title}</h6>
    </>
  );
}

function FooterLink(props) {
  return <li className="text-lime-50 hover:text-lime-300 mt-1">
    <a href="/">{props.title}</a>
  </li>;
}

function Footer() {
  return (
    <>
      <footer className="full-section bg-lime-900">
        <div className="section-container p-8 flex justify-between">
          <div>
            <img src={logo} alt="Logo Footer" className="w-56" />
          </div>
          <div>
            <FooterTitle title="Doormat Navigation" />
            <ul>
              <FooterLink title="Home" />
              <FooterLink title="About" />
              <FooterLink title="Menu" />
              <FooterLink title="Reservations" />
              <FooterLink title="Order Online" />
              <FooterLink title="Login" />
            </ul>
          </div>
          <div>
            <FooterTitle title="Contact" />
            <ul>
              <FooterLink title="Address" />
              <FooterLink title="Phone Number" />
              <FooterLink title="E-mail" />
            </ul>
          </div>
          <div>
            <FooterTitle title="Social Media Links" />
            <ul>
              <FooterLink title="Facebook" />
              <FooterLink title="Instagram" />
              <FooterLink title="X" />
              <FooterLink title="Linkedin" />
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
