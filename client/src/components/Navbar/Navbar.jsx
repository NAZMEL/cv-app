import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import style from "./Navbar.module.css";

const NavbarBlock = () => {
  return (
    <div>
      <Navbar
        className={style.navBlock}
        collapseOnSelect
        expand="lg md"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="me-auto flex-column">
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={NavLink} to="/education">
                Education
              </Nav.Link>
              <Nav.Link as={NavLink} to="/experience">
                Experience
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects">
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/technologies">
                Tools
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarBlock;
