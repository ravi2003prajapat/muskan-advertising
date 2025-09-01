import React, { useState } from "react";
import styles from "./Footer.module.css";

import Instagram from "../assets/Instagram.webp";
import Gmail from "../assets/Gmail.webp";
import Whatsapp from "../assets/Whatsapp.webp";
import Linkedin from "../assets/Linkedin.webp";

const Footer = () => {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");

  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(contact)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    if (!name.trim()) {
      alert("Please enter your full name");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/send-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          number: contact,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Details sent!");
        setName("");
        setContact("");
      } else {
        alert(data.message || "Failed to send details.");
      }
    } catch (error) {
      alert("Error sending details. Please try again later.");
      console.error("Submit error:", error);
    }
  };

  return (
    <div className={styles.footer}>
      {/* Left Section - Social Media */}
      <div className={styles.left}>
        <div className={styles.top}>
          <h1>Follow Us On</h1>
          <div className={styles.icon}>
            <a
              href="https://www.instagram.com/muskanadvertisingjjn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="mailto:muskanadvertisingjjn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gmail} alt="Gmail" />
            </a>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your WhatsApp number link
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" // Replace with your LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Center Section - Products */}
      <div className={styles.center}>
        <h1>Products</h1>
        <p>Aluminium Standee</p>
        <p>Iron Standee</p>
        <p>Canopy</p>
        <p>Iron Frames</p>
        <p>Sun Board</p>
        <p>Frame Corner</p>
      </div>

      {/* Right Section - Contact Form */}
      <form className={styles.right} onSubmit={handleSubmit}>
        <div className={styles.fullname}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your full name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.contactno}>
          <label>Contact No.</label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.send}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Footer;
