import React from 'react';
import { useAuth } from '../../hooks/Auth';
import AccountSummary from '../../components/AccountSummary';
import styles from './index.module.scss';

const accounts = [
  { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
  { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
  { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
];

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <main className="main bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        <button className={styles.edit_button}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      {accounts.map(({ title, amount, description }, i) => (
        <AccountSummary key={i} title={title} amount={amount} description={description} />
      ))}
    </main>
  );
}
