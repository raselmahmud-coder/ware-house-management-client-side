import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import HeroSection from "./HeroSection";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Container style={{ backgroundColor: "#AA55FF", borderRadius: "5px" }}>
          <Navbar.Brand href="/">
            <span className="logo">King Furniture</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="shop">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="inventory">Inventory</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="order">My Order</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HeroSection />
    </div>
  );
};

export default Header;
