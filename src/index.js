import React from 'react';
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HourlyStatusProvider } from './context/HourlyStatusContext.jsx'
import cardData from './data/cardData.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HourlyStatusProvider cardData={cardData}>
      <App />
    </HourlyStatusProvider>

  </StrictMode>,
);


