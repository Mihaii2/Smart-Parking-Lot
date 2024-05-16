import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'leaflet/dist/leaflet.css';
//import { SettingsProvider } from './contexts/settingsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
