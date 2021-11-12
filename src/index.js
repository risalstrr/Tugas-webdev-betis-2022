import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Body from './Papantulis';
import Footer from './footer';
import Layout from './layout';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Layout/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
