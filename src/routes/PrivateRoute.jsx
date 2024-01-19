import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

// import useAuth from 'hooks/useAuth';
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const {
  //   isLoggedIn,
  //   // isRefreshing
  // } = useAuth();
  // const shouldRedirect = !isLoggedIn;
  // // && !isRefreshing

  const shouldRedirect = false;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.string,
};
