import { Link } from "react-router-dom";

function Nav() {
  return <ul className="flex gap-12 font-bold text-slate-50">
    <li><Link className="hover:text-yellow-400" to={`/`}>Home</Link></li>
    <li><Link className="hover:text-yellow-400" to={`/about`}>About</Link></li>
    <li><Link className="hover:text-yellow-400" to={`/menu`}>Menu</Link></li>
    <li><Link className="hover:text-yellow-400" to={`/reservations`}>Reservations</Link></li>
    <li><Link className="hover:text-yellow-400" to={`/order-online`}>Order Online</Link></li>
    <li><Link className="hover:text-yellow-400" to={`/login`}>Login</Link></li>
  </ul>
}

export default Nav;