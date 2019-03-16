import React from 'react';
import styles from './Navbar.module.css';

const HamburguerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459" width="459" height="459">
    <path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z" />
  </svg>
);

const Navbar = ({ onSidebarClick }) => (
  <div className={styles.navbar}>
    <button className={styles.navbarIcon} onClick={onSidebarClick} aria-label="Open menu">
      <HamburguerIcon />
    </button>
  </div>
);

export default Navbar;
