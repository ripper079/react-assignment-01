import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// https://create-react-app.dev/docs/adding-bootstrap/
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Personform from './components/Person-form';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Personform />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
