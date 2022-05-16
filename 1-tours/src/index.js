import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const rootNode = ReactDOM.createRoot(container);
rootNode.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)