import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const userData = useSelector((state) => state.auth);
  const userType = userData?.user?.type;
  let signed = false;
  console.log(userType);

  if (userData) {
    signed = true;
  }

  if (!signed && isPrivate && userType !== true) {
    return <Redirect to="/sign-in" />;
  }

  if (signed && !isPrivate && userType === true) {
    return <Redirect to="/" />;
  }

  return <Route {...{rest}} render={(props) => <Component {...{props}} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.elementType, propTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
