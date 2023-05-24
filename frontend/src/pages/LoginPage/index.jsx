import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function LoginPage() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ firstName: 'Pedro', lastName: 'Jarvis' });
    navigate('/profile');
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button onClick={handleLogin} className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
