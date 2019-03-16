import React from 'react';
import Modal from 'react-modal';
import styles from './Sidebar.module.css';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="357" height="357" viewBox="0 0 357 357">
    <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
  </svg>
);

const Sidebar = ({ isOpen, onCloseClick }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onCloseClick}
    closeTimeoutMS={300}
    className={{
      base: styles.container,
      afterOpen: styles.containerAfterOpen,
      beforeClose: styles.containerBeforeClose
    }}
    overlayClassName={{
      base: styles.overlay,
      afterOpen: styles.overlayAfterOpen,
      beforeClose: styles.overlayBeforeClose
    }}
    aria={{
      labelledby: 'sidebar-header'
    }}
  >
    <nav>
      <button className={styles.closeButton} onClick={onCloseClick} aria-label="Close menu">
        <CloseIcon />
      </button>

      <header id="sidebar-header" className={styles.header}>
        Sidebar
      </header>

      <ul className={styles.content}>
        <li>
          <a href="sidebar_link_one">Item One</a>
        </li>
        <li>
          <a href="sidebar_link_two">Item Two</a>
        </li>
        <li>
          <a href="sidebar_link_three">Item Three</a>
        </li>
      </ul>
    </nav>
  </Modal>
);

export default Sidebar;
