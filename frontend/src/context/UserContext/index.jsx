import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Logic to perform login and set the user data
    setUser(userData);
  };

  const logout = () => {
    // Logic to perform logout and clear the user data
    setUser(null);
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
