import React, { useState } from 'react';
import styles from './App.module.css';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <Navbar onSidebarClick={openSidebar} />

      <Sidebar isOpen={isSidebarOpen} onCloseClick={closeSidebar} />

      <main className={styles.main}>
        <h1>Main content</h1>

        <p>
          <a href="#">Link One</a>
        </p>
        <p>
          <a href="#">Link Two</a>
        </p>
      </main>
    </div>
  );
};

export default App;
