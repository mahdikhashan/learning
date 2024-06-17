import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import persistedReducer from './configStore.js';

const middlewares = [thunk];

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

export { store, persistor };
