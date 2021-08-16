import React from 'react';
import { useHistory } from 'react-router-dom';

function Navigation() {
  const history = useHistory();
  const toSignIn = () => history.push('/sign-in');

  return (
    <div>
      <button onClick={toSignIn} type="button" aria-label="Navigate button" />
    </div>
    ¯\_(ツ)_/¯
  );
}

export default Navigation;
