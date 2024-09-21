import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <>
      <li className="w-full flex lg:w-auto">
        <Link
          className="hover:text-yellow-400 hover:bg-lime-900 px-8 py-4 flex w-full lg:p-0 hover:lg:bg-transparent lg:w-fit lg:text-nowrap"
          to={props.url}
        >
          {props.title}
        </Link>
      </li>
    </>
  );
}

function Nav() {
  return (
    <>
      <ul className="absolute text-white flex flex-col top-24 left-0 w-full bg-lime-800 font-bold lg:flex-row lg:gap-12 lg:text-slate-50 lg:flex lg:relative lg:top-auto lg:left-auto lg:bg-transparent lg:w-auto">
        <NavLink title="Home" url="/" />
        <NavLink title="About" url="/about" />
        <NavLink title="Menu" url="/menu" />
        <NavLink title="Reservations" url="/reservations" />
        <NavLink title="Order Online" url="/order-online" />
        <NavLink title="Login" url="/login" />
      </ul>
    </>
  );
}

export default Nav;
