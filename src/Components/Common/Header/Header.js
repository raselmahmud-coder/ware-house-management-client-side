import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import HeroSection from "./HeroSection";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:"#AA55FF", paddingTop: "0px", paddingBottom: "0px" }}>
          <Navbar.Brand href="/">
            <span className="logo ms-4">King Furniture</span>
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
      </Navbar>
      <HeroSection />
    </>
  );
};

export default Header;
