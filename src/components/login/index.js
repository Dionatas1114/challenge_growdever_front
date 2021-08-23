import React, { useState, useEffect } from 'react';
// import Input from '@material-ui/core/Input';

import api from '../../services/api';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  async function handleLogin() {
    try {
      api.post('/login', {
        email,
        password,
      });

      // if (response.data.token) {
      //   dispatch(userActions.login(response.data));
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form>
        <h3>Insira seus dados</h3>
        <input
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" OnClick={() => handleLogin()}>
          Login
        </button>
      </form>
    </div>
  );
};
