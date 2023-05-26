import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserProfile, selectUserProfile } from '../../features/userProfile';
import styles from './index.module.scss';

export default function UserProfileEditForm({ closeForm }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleFormSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Access input values
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

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
          ref={firstNameRef}
          placeholder={user.firstName}
          className={styles.form__input}
        />
        <input
          type="text"
          id="lastname"
          ref={lastNameRef}
          placeholder={user.lastName}
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
