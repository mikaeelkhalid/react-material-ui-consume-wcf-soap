import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reqIntercept, resIntercept } from '../src/middleware/Interceptors';

//reqIntercept();
//resIntercept();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
