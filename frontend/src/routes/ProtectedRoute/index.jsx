import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
