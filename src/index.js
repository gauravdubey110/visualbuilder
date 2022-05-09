import React from 'react';
import ReactDOM from 'react-dom/client';
import "grapesjs/dist/css/grapes.min.css";
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

