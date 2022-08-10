import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider} from './contexts/AuthProvider';
import { DataProvider } from './contexts/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <DataProvider>
            <App />
        </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
