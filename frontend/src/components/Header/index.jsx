/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import logo from '../../assets/img/argentBankLogo.png';

export default function Header() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return user ? (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/profile" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          &nbsp;{user.firstName}&nbsp;
        </Link>
        <button onClick={handleLogout} className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          &nbsp;Sign Out
        </button>
      </div>
    </nav>
  ) : (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </Link>
      </div>
    </nav>
  );
}
