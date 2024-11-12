import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import for createRoot
import App from './App';
import './styles/App.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Use createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
