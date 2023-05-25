import React, { useRef, useState } from 'react';
import { useAuth } from '../../hooks/Auth';
import styles from './index.module.scss';

export default function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const rememberMeRef = useRef();

  const handleFormSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Access input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rememberMe = rememberMeRef.current.checked;

    // Sign in user
    login({ email, password, rememberMe }).catch((e) => setError(e.message));
  };

  return (
    <main className="main bg-dark">
      <section className={styles.form_section}>
        <i className={`fa fa-user-circle ${styles.form_section__icon}`}></i>
        <h1>Sign In</h1>
        <form method="post" onSubmit={handleFormSubmit}>
          <div className={styles.form_section__input_wrapper}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailRef} />
          </div>
          <div className={styles.form_section__input_wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <div className={styles.form_section__input_remember}>
            <input type="checkbox" id="remember-me" ref={rememberMeRef} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={styles.form_section__button}>
            Sign In
          </button>
          {error && <p className={styles.form_section__error_message}>{error}</p>}
        </form>
      </section>
    </main>
  );
}
