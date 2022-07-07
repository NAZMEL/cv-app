import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
//import styles from "./Navbar.module.css";

const NavbarBlock = () => {
  return (
    // <div className={styles.navBar}>
    //   <NavLink to="/profile">Main information</NavLink>
    //   <NavLink to="/education">Education</NavLink>
    //   <NavLink to="/experience">Experience</NavLink>
    //   <NavLink to="/projects">Projects</NavLink>
    //   <NavLink to="/technologies">Technologies</NavLink>
    // </div>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="me-auto flex-column">
            <Nav.Link href="/profile">Main Information</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/technologies">Technologies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBlock;
