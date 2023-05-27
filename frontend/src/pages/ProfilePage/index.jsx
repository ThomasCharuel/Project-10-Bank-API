import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserProfile } from '../../features/userProfile';
import { selectUserAccounts } from '../../features/userAccounts';
import AccountSummary from '../../components/AccountSummary';
import UserProfileEditForm from '../../components/UserProfileEditForm';
import { useGetOrFetchUserProfile } from '../../hooks/getOrFetchUserProfile';
import styles from './index.module.scss';

export default function ProfilePage() {
  useGetOrFetchUserProfile();
  const userProfile = useSelector(selectUserProfile);

  const accounts = useSelector(selectUserAccounts);

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  return (
    userProfile && (
      <main className="main bg-dark">
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            {!isEditFormOpen && (
              <>
                {userProfile.firstName} {userProfile.lastName}!
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
    )
  );
}
