import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../Images/VirtualReality.png";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapse
  const navItems = [
    { name: "Home", id: "videoBackground" },
    { name: "Meta Quest 3", id: "meta" },
    { name: "Products", id: "vrHeadsets" },
    { name: "Games", id: "games" },
  ];

  // Function to toggle the collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <Container fluid>
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Virtual Reality" />
        </a>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed} 
          aria-label="Toggle navigation"
          onClick={toggleCollapse} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <div className="ul-smaller-width">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={item.id} 
                    smooth={true} 
                    duration={500}
                    offset={-70}
                    className="nav-link"
                    activeClass="active" 
                    spy={true} 
                    onClick={toggleCollapse} 
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
