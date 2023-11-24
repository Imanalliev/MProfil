import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './components/context/AuthContext';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <AuthContext>
  <App />
  </AuthContext>
    {/* <React.StrictMode> */}
    
    {/* </React.StrictMode> */}
  </BrowserRouter>
);


