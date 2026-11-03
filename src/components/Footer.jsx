import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Learn skills that move your future forward. Make every learning moment count.</p>
          <div className="socials">
            <a href="https://instagram.com" aria-label="Instagram"><Instagram size={18}/></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="https://twitter.com" aria-label="Twitter"><Twitter size={18}/></a>
          </div>
        </div>
        <div><h4>Explore</h4><Link to="/courses">All courses</Link><Link to="/about">About us</Link><Link to="/dashboard">Student dashboard</Link></div>
        <div><h4>Account</h4><Link to="/login">Log in</Link><Link to="/register">Create account</Link><a href="mailto:hello@learnify.example">Contact support</a></div>
        <div><h4>Stay inspired</h4><p>Small steps today. Big possibilities tomorrow.</p><Link className="footer-link" to="/courses">Explore courses <ArrowUpRight size={15}/></Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Learnify. All rights reserved.</span><span>Made for curious minds.</span></div>
    </footer>
  );
}