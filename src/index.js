import React from 'react';
import ReactDOM from 'react-dom/client';
//Routing support
import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// https://create-react-app.dev/docs/adding-bootstrap/
import 'bootstrap/dist/css/bootstrap.css';

//Import App react component from App.js
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Enables routing in application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
