import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../assets/Logo.webp'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.right}>
        <ul>
            <li> <Link to='/' className={styles.underline}>Home</Link></li>
            <li><Link to='/about' className={styles.underline}>About Us</Link></li>
            <li><Link to='/services' className={styles.underline}> Services</Link></li>
            <li><button><Link to='/contact' className={styles.underline}>Contact Us</Link></button></li>

        </ul>
      </div>
      
    </div>
  )
}

export default Navbar