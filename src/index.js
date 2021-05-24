import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AmazonContextProvider} from './Context/AmazonContext';


ReactDOM.render(
  <AmazonContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AmazonContextProvider>,
  document.getElementById('root')
);

