import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PublicRoute({ restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate replace to={redirectTo} /> : <Outlet />;
}

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
