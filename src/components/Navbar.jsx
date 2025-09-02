import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/Logo.webp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={isMobileMenuOpen ? styles.barActive : styles.bar}></span>
        <span className={isMobileMenuOpen ? styles.barActive : styles.bar}></span>
        <span className={isMobileMenuOpen ? styles.barActive : styles.bar}></span>
      </div>

      <div className={`${styles.right} ${isMobileMenuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={styles.underline}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={styles.underline}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={styles.underline}
              onClick={() => setIsMobileMenuOpen(false)}
            >
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
    </nav>
  );
};

export default Navbar;
