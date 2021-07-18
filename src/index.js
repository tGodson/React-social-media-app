import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './header';
import Footer from './footer';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);