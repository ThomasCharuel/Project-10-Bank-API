import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserProfile, selectUserProfile } from '../../features/userProfile';
import styles from './index.module.scss';

export default function UserProfileEditForm({ closeForm }) {
  const dispatch = useDispatch();

  const user = useSelector(selectUserProfile);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleFormSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Edit user profile
    await dispatch(updateUserProfile(firstName, lastName));

    closeForm();
  };

  return (
    <form method="post" onSubmit={handleFormSubmit} className={styles.form}>
      <div className={styles.form__input_wrapper}>
        <input
          type="text"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.form__input}
        />
        <input
          type="text"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__buttons_wrapper}>
        <button type="submit" className={styles.form__button}>
          Save
        </button>
        <button onClick={closeForm} className={styles.form__button}>
          Cancel
        </button>
      </div>
    </form>
  );
}

UserProfileEditForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
};
