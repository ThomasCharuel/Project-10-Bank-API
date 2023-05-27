import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUserIsAuthenticated } from '../../features/auth';
import { selectUserProfile } from '../../features/userProfile';
import { useGetOrFetchUserProfile } from '../../hooks/getOrFetchUserProfile';
import logo from '../../assets/img/argentBankLogo.png';
import styles from './index.module.scss';

export default function Header() {
  const dispatch = useDispatch();

  useGetOrFetchUserProfile();
  const userProfile = useSelector(selectUserProfile);

  const isAuthenticated = useSelector(selectUserIsAuthenticated);

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <img className={styles.header__logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userProfile && (
          <Link to="/profile" className={styles.navigation__item}>
            <i className="fa fa-user-circle"></i>
            &nbsp;{userProfile.firstName}&nbsp;
          </Link>
        )}
        {isAuthenticated ? (
          <button onClick={onClickLogout} className={styles.navigation__item}>
            <i className="fa fa-sign-out"></i>
            &nbsp;Sign Out
          </button>
        ) : (
          <Link to="/login" className={styles.navigation__item}>
            <i className="fa fa-user-circle"></i>
            &nbsp;Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
