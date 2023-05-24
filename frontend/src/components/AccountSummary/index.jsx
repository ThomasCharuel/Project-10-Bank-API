import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function AccountSummary({ title, amount, description }) {
  return (
    <section className={styles.account}>
      <div className={styles.account__content_wrapper}>
        <h3 className={styles.account__title}>{title}</h3>
        <p className={styles.account__amount}>{amount}</p>
        <p className={styles.account__description}>{description}</p>
      </div>
      <div className={`${styles.account__content_wrapper} ${styles.cta}`}>
        <button className={styles.transaction_button}>View transactions</button>
      </div>
    </section>
  );
}

AccountSummary.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
