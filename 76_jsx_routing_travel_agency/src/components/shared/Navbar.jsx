import { Link } from "react-router";
const Navbar = () => (
  <nav className="navbar bg-base-200">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">Travel Agency</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;