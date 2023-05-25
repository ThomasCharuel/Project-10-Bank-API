import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { STORAGE, useStorage } from '../Storage';
import { signIn, getUserProfile } from '../../_services/Api.Service';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useStorage('user', null);
  const navigate = useNavigate();

  // Call to authenticate the user
  const login = async (data) => {
    // Logic to perform login and set the user data
    const { email, password, rememberMe } = data;

    const signInResponse = await signIn(email, password);
    const { token } = signInResponse.body; // Extract the token from the response

    const userProfileResponse = await getUserProfile(token);
    const { firstName, lastName } = userProfileResponse.body;

    // Save user data. Based on "remember me" input we save user in memory (state) or local storage
    setUser(
      {
        firstName,
        lastName,
        token,
      },
      rememberMe ? STORAGE.PERSISTENT : STORAGE.MEMORY,
    );

    navigate('/profile');
  };

  // Call to sign out logged in user
  const logout = () => {
    // Logic to perform logout and clear the user data
    setUser(null, STORAGE.PERSISTENT);
    navigate('/');
  };

  // UseMemo to cache calculation between re-renders
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
