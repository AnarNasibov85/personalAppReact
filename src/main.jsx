import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/Global.css';
// import GlobalProvider from './Store/Global/GlobalProvider.jsx';
import { ToastContainer } from 'react-toastify';
import {Provider} from 'react-redux'
import { store } from './redux/store.js';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <GlobalProvider> */}
          <Provider store={store}>
          <App />
          </Provider>
          <ToastContainer />
        {/* </GlobalProvider> */}
      </BrowserRouter>
   
    </ChakraProvider>
  </React.StrictMode>
);
