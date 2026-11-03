import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/courses" onClick={close}>Courses</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <Link className="mobile-login" to="/login" onClick={close}>Log in</Link>
          <Link className="btn btn-primary nav-cta" to="/register" onClick={close}>Get Started</Link>
        </nav>
        <Link className="nav-login" to="/login">Log in</Link>
      </div>
    </header>
  );
}