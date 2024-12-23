import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
