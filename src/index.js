import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>


  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>

  
  </BrowserRouter>
  
);


