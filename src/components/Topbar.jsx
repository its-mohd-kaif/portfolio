import Aos from "aos";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { MdClose } from "react-icons/md"; // Import the close icon
import "./MyNavbar.css";

function Topbar() {
  const svgString = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="#01BE96"
    >
      <rect width="100" height="100" rx="15" ry="15" />
      <text
        x="50"
        y="50"
        font-size="48"
        font-family="Arial, sans-serif"
        fill="#fff"
        text-anchor="middle"
        dominant-baseline="central"
      >
        MK
      </text>
    </svg>
  `;

  // State to manage the menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu and close it on link clicks
  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Reset isMenuOpen state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 300,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div>
      <Navbar className="custom-navbar" variant="dark" expand="sm">
        <Navbar.Brand href="#home">
          <img
            alt="MK Logo"
            src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
              svgString
            )}`}
            width="50"
            height="31"
            className="d-inline-block align-top"
          />{" "}
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          className={isMenuOpen ? "open" : ""}
          onClick={toggleMenu}
        />
        <Navbar.Collapse
          className={`justify-content-end ${
            isMenuOpen ? "show-menu" : "initial-menu"
          }`}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Navbar.Text className="me-3">
            <a href="#home" className="nav-link-animate" onClick={toggleMenu}>
              Home
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a href="#stack" className="nav-link-animate" onClick={toggleMenu}>
              Stack
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a
              href="#projects"
              className="nav-link-animate"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a
              href="#contact"
              className="nav-link-animate"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </Navbar.Text>
          {isMenuOpen && <MdClose className="close-icon" onClick={closeMenu} />}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;
