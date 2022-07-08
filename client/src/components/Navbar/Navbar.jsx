import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import style from "./Navbar.module.css";

const NavbarBlock = () => {
  return (
    // <div className={style.navBlock}>
    //   <NavLink to="/profile">Main information</NavLink>
    //   <NavLink to="/education">Education</NavLink>
    //   <NavLink to="/experience">Experience</NavLink>
    //   <NavLink to="/projects">Projects</NavLink>
    //   <NavLink to="/technologies">Technologies</NavLink>
    // </div>
    <div >
      <Navbar className={style.navBlock} collapseOnSelect expand="lg md" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="me-auto flex-column" >
              <Nav.Link as={NavLink} to="/profile">Main Information</Nav.Link>
              <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
              <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/technologies">Technologies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>


  );
};

export default NavbarBlock;
