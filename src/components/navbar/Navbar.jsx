import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "/src/scss/coffee.scss";
import "./Navbar.css";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control offcanvas visibility
  const [scrolled, setScrolled] = useState(false);

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

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
              <strong className="mocha">Bestday Café</strong>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="custom-toggle coffee"
              onClick={() => setShowOffcanvas(true)} // Open offcanvas on toggle click
            />
            <Navbar.Offcanvas
              className="navbar-offcanvas"
              show={showOffcanvas} // Control offcanvas visibility
              onHide={closeOffcanvas} // Close offcanvas when clicking outside
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
                <Nav className="justify-content-center flex-grow-1 pe-3=">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="nav-link link poppins-medium"
                    onClick={closeOffcanvas} // Close offcanvas when item is clicked
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/menu"
                    className="nav-link link poppins-medium"
                    onClick={closeOffcanvas} // Close offcanvas when item is clicked

                  >
                    Menu
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/gallery"
                    className="nav-link poppins-medium"
                    onClick={closeOffcanvas} // Close offcanvas when item is clicked

                  >
                    Gallery
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/blogs"
                    className="nav-link poppins-medium"
                    onClick={closeOffcanvas} // Close offcanvas when item is clicked

                  >
                    Blogs
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    className="nav-link  poppins-medium"
                    onClick={closeOffcanvas} // Close offcanvas when item is clicked

                  >
                    Contact Us
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
