import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import useAuth from 'src/hooks/useAuth';
// import { useGetCurrentUserQuery } from 'src/redux/slices/services';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/login', isRefreshing }) => {
  const { isLoggedIn } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.string,
  isRefreshing: PropTypes.bool,
};
