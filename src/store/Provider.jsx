import React from 'react';
import Context from './Context';

const storeProvider = ({ Children }) => {
  return (
    <Context.Provider>
      value={{ token, setToken }}
      {Children}
    </Context.Provider>
  );
};

export default storeProvider;
