import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

PublicRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.string,
};
