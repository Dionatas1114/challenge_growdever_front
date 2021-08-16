import { createStore, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';

// import footer from './footer/reducer';
import auth from './auth/reducer';
import persistedReducer from './persistReducer';

const reducers = combineReducers({
  // footer,
  auth,
});

const store = createStore(persistedReducer(reducers));
const persistor = persistStore(store);

export { store, persistor };
