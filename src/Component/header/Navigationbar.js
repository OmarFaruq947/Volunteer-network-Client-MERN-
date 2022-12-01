import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../img/logos/logo.png";
import user from "../img/user/babySit.png";
import "./Navigation.css";

const Navigationbar = () => {
  return (
    <div className="navPosition">
      {["md"].map((expand) => (
        <Navbar key={expand} className="navbar_design" expand={expand}>
          <Container fluid>
            <Navbar.Brand style={{ width: "18rem" }} to="/home">
              <img className="w-50" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/donation">
                    Donation
                  </Nav.Link>
                  <Nav.Link as={Link} to="/events">
                    Events
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    Blog
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/faq">
                    FAQ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>

                  <Nav.Link as={Link} to="/admin" className="mx-2">
                    Admin
                  </Nav.Link>

                  {/* user img */}
                  <img className="userPic" src={user} alt="" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Navigationbar;
