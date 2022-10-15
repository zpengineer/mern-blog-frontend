import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from 'components/App';
import { store, persistor } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/mern-blog-frontend/">
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
