import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "/src/scss/coffee.scss";
import "./Navbar.css";
import logo from "/src/assets/logo.svg";
function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" fixed-top navbar-expand-lg bg-transparent mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="align-items-center justify-content-center coffee">
              <img src={logo} alt="Logo" height={50} width={50} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                  <Nav.Link href="" className="nav-link poppins-medium">
                    Home
                  </Nav.Link>
                  <Nav.Link href="" className="nav-link poppins-medium">
                    Menu
                  </Nav.Link>
                  <Nav.Link href="" className="nav-link poppins-medium">
                    Booking
                  </Nav.Link>
                  <Nav.Link href="" className="nav-link poppins-medium">
                    Gallery
                  </Nav.Link>
                  <Nav.Link href="" className="nav-link  poppins-medium">
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
