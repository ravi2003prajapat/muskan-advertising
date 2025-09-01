import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/Logo.webp";

const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <Link to="/" className={styles.underline}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.underline}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className={styles.underline}>
              Services
            </Link>
          </li>
          <li>
            <button className={styles.contactBtn} onClick={scrollToContact}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
