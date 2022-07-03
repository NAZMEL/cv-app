import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <NavLink to="/profile">Main information</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </div>
  );
};

export default Navbar;
