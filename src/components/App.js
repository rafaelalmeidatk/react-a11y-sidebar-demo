import React, { useState } from 'react';
import styles from './App.module.css';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onCloseClick={() => setSidebarOpen(false)} />

      <div className="App">
        <Navbar onSidebarClick={() => setSidebarOpen(true)} />

        <main className={styles.main}>
          <h1>Main content</h1>

          <p>
            <a href="main_link_one">Link One</a>
          </p>
          <p>
            <a href="main_link_two">Link Two</a>
          </p>
        </main>
      </div>
    </>
  );
};

export default App;
