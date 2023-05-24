import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import logo from '../../assets/img/argentBankLogo.png';

export default function Header() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
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
