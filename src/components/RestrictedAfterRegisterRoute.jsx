import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRegistered } from '../redux/auth/selectors';

export default function RestrictedAfterRegisterRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isRegistered = useSelector(selectIsRegistered);

  return isRegistered ? <Navigate to={redirectTo} /> : <Component />;
}

RestrictedAfterRegisterRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
