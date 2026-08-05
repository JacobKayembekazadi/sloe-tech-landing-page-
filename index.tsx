import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookieBanner, applyStoredConsent } from './consent';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Before anything renders: start analytics only if this visitor previously accepted,
// and otherwise clear any identifier left over — including the ones set on
// `.sloelabs.com` before the consent gate existed.
applyStoredConsent();

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
    <CookieBanner />
  </React.StrictMode>
);
