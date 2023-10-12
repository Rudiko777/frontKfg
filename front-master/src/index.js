import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/global.css';
import './css/reset.css';
import './css/style.css';
import reportWebVitals from './reportWebVitals';
import Header from './js/App'
import HeaderTop from "./js/page_1/header/header";


const header = ReactDOM.createRoot(document.getElementById('header'))
header.render(<HeaderTop />)




reportWebVitals();
