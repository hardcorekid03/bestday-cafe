import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "/src/scss/coffee.scss";
import "./Navbar.css";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`fixed-top navbar-expand-lg mb-3 ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <Container fluid>
            <Navbar.Brand
              as={Link}
              to="/"
              className="align-items-center justify-content-center coffee"
            >
              <img src={logo} alt="Logo" height={50} width={50} />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="custom-toggle coffee"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className=""
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Bestday Café
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="nav-link link poppins-medium"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/menu"
                    className="nav-link link poppins-medium"
                  >
                    Menu
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/booking"
                    className="nav-link poppins-medium"
                  >
                    Booking
                  </Nav.Link>
                  <Nav.Link className="nav-link poppins-medium">
                    Gallery
                  </Nav.Link>
                  <Nav.Link className="nav-link  poppins-medium">
                    About Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
