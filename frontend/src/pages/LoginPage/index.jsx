import React from 'react';
import { useAuth } from '../../hooks/Auth';
import styles from './index.module.scss';

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = () => {
    login({ firstName: 'Pedro', lastName: 'Jarvis' });
  };

  return (
    <main className="main bg-dark">
      <section className={styles.form_section}>
        <i className={`fa fa-user-circle ${styles.form_section__icon}`}></i>
        <h1>Sign In</h1>
        <form>
          <div className={styles.form_section__input_wrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.form_section__input_wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.form_section__input_remember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button onClick={handleLogin} className={styles.form_section__button}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
