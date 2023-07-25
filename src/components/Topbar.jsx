import Aos from "aos";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { MdClose } from "react-icons/md";
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
        <Navbar.Toggle />
        <Navbar.Collapse className={`justify-content-end`}>
          <Navbar.Text className="me-3">
            <a href="#home" className="nav-link-animate">
              Home
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a href="#stack" className="nav-link-animate">
              Stack
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a href="#projects" className="nav-link-animate">
              Projects
            </a>
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <a href="#contact" className="nav-link-animate">
              Contact
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;