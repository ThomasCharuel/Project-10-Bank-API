import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsAuthenticated } from '../../features/auth';

// Enum defining different storage types: local (persistent) or memory (react state)
export const USER_TYPES = {
  SIGNED_IN: Symbol('signed_in'),
  NOT_SIGNED_IN: Symbol('not_signed_in'),
};

export default function ProtectedRoute({ children, allowed_users }) {
  const userIsAuthenticated = useSelector(selectUserIsAuthenticated);

  if (allowed_users === USER_TYPES.SIGNED_IN) {
    return userIsAuthenticated ? children : <Navigate to="/" />;
  } else {
    return userIsAuthenticated ? <Navigate to="/profile" /> : children;
  }
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowed_users: PropTypes.oneOf([USER_TYPES.SIGNED_IN, USER_TYPES.NOT_SIGNED_IN]),
};
