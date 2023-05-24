import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AuthProvider } from '../../hooks/Auth';

export default function Root() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}
