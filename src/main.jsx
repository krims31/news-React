import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const rootElement = document.getElementById ('root');
const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)