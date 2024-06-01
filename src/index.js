import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import App from './App';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'https://port-0-crawling-figure-server-1mrfs72llwvr46pf.sel5.cloudtype.app/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

