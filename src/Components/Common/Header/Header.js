import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = (e) => {
    e.preventDefault();
    if (user) {
      signOut(auth);
    }
  };
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#AA55FF",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      >
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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className="nav-link"
                eventkey="inventory"
                to="/manage-inventories"
              >
                Manage Inventories
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink eventkey="shop" className="nav-link" to={"/blog"}>
                Blog
              </NavLink>
            </Nav.Item>
            {user && (
              <>
                <Nav.Item>
                  <NavLink
                    className="nav-link"
                    to="/manage-item"
                    eventkey="manageItem"
                  >
                    Manage Item
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    className="nav-link"
                    to="/add-inventory-item"
                    eventkey="item"
                  >
                    Add Item
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink className="nav-link" to="/order" eventkey="order">
                    My Item
                  </NavLink>
                </Nav.Item>
              </>
            )}
            <Nav.Item>
              {user ? (
                <NavLink
                  className="nav-link"
                  to="/log-out"
                  onClick={handleLogOut}
                  eventkey="logOut"
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink
                  className="nav-link"
                  to="/getStart"
                  eventkey="getStart"
                >
                  Get Start
                </NavLink>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
