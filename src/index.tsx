import React from 'react';
import '@Style/GlobalStyles.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.Fragment>
        <App />
    </React.Fragment>
);
