import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './combineReducers.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
