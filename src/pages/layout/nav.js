import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavigationBar = (props) => {
  const cartCount = props.cartItems;

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ecommerce
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/product">Product</Nav.Link>
                 
                </Nav>
                <nav>
                  <div className="d-flex">
                    <div className="position-relative">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        style={{ fontSize: "2rem" }}
                      />
                      {cartCount > 0 && (
                        <span
                          className="badge bg-primary position-absolute top-0 start-100 translate-middle"
                          style={{ transform: "translate(-50%, -50%)" }}
                        >
                          {cartCount}
                        </span>
                      )}
                    </div>
                  </div>
                </nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavigationBar;
