import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PrivateRoute({ redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate replace to={redirectTo} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
