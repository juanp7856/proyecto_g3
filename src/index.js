import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Historia1 from './pages/Historia1';
import Historia10 from './pages/Historia10';
import Historia11 from './pages/Historia11';
import Historia5 from './pages/Historia5';
import Historia24 from './pages/Historia24';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Historia24/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
