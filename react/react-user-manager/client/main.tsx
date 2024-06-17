import './index.css';

import { SnackbarProvider } from 'notistack';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './application/App';
import { persistor, store } from './services/store';

// eslint-disable-next-line no-use-before-define, no-undef
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
