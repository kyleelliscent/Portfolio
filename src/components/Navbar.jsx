import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="Custom Portfolio Logo" className="logo" width="34" height="34" />
        <span className="brand-name">Kyle Ellis</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}