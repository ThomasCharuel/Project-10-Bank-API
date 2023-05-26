import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserProfile,
  selectUserProfile,
  selectUserProfileStatus,
} from '../../features/userProfile';
import AccountSummary from '../../components/AccountSummary';
import UserProfileEditForm from '../../components/UserProfileEditForm';
import styles from './index.module.scss';
import { selectUserAccounts } from '../../features/userAccounts';

export default function ProfilePage() {
  const dispatch = useDispatch();

  const userProfileStatus = useSelector(selectUserProfileStatus);
  const userProfile = useSelector(selectUserProfile);
  const accounts = useSelector(selectUserAccounts);

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  useEffect(() => {
    if (userProfileStatus === 'idle') {
      dispatch(fetchUserProfile());
    }
  }, [userProfileStatus]);

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
