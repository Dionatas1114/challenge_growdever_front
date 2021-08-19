import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';
import { persistor, store } from './store';
import Routes from './routes';
// import Footer from './components/footer';

export default () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        {/* <Footer /> */}
      </PersistGate>
    </Provider>
    </SnackbarProvider>
  );
};
