/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import logo from '../../assets/img/argentBankLogo.png';
import styles from './index.module.scss';

export default function Header() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return user ? (
    <nav className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <img className={styles.header__logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/profile" className={styles.navigation__item}>
          <i className="fa fa-user-circle"></i>
          &nbsp;{user.firstName}&nbsp;
        </Link>
        <button onClick={handleLogout} className={styles.navigation__item}>
          <i className="fa fa-sign-out"></i>
          &nbsp;Sign Out
        </button>
      </div>
    </nav>
  ) : (
    <nav className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <img className={styles.header__logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/login" className={styles.navigation__item}>
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </Link>
      </div>
    </nav>
  );
}
