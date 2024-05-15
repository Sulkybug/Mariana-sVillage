import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

interface NavbarProps {
  onScroll: string;
}

const Navbar: React.FC<NavbarProps> = ({ onScroll }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = (): void => {
    // Specify the return type as void
    if (window.innerWidth < 1024 && navRef.current) {
      navRef.current.classList.toggle("toggle_nav");
    }
  };
  return (
    <header className={onScroll}>
      <Link to="/" className="navbar-logo">
        <img
          src="/img/LogoMarianas.png"
          alt="icon"
          className="myLogo"
          loading="lazy"
        />
        <h2 className="logoText">Mariana's Village</h2>
      </Link>
      <nav ref={navRef}>
        <Link to="/" onClick={showNavBar}>
          Home
        </Link>
        <a href="/#product" onClick={showNavBar}>
          Products
        </a>
        <a href="/#investors" onClick={showNavBar}>
          Investors
        </a>
        <Link to="/about-us" onClick={showNavBar}>
          About us
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
