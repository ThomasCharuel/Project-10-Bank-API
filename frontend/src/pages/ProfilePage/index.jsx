import React, { useState } from 'react';
import { useAuth } from '../../hooks/Auth';
import AccountSummary from '../../components/AccountSummary';
import UserProfileEditForm from '../../components/UserProfileEditForm';
import styles from './index.module.scss';

const accounts = [
  { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
  { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
  { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
];

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  return (
    <main className="main bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {!isEditFormOpen && (
            <>
              {user.firstName} {user.lastName}!
            </>
          )}
        </h1>
        {isEditFormOpen ? (
          <UserProfileEditForm closeForm={() => setIsEditFormOpen(false)} />
        ) : (
          <button onClick={() => setIsEditFormOpen(true)} className={styles.edit_button}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>

      {accounts.map(({ title, amount, description }, i) => (
        <AccountSummary key={i} title={title} amount={amount} description={description} />
      ))}
    </main>
  );
}
