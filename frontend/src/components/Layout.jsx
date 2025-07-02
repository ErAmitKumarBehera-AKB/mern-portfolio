// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', marginTop: '80px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;