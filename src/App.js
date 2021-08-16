import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
import Routes from './routes';
// import Footer from './components/footer';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        {/* <Footer /> */}
      </PersistGate>
    </Provider>
  );
};
