import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import App from './App';
import customTheme from './theme/theme'; // Import the custom theme

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={customTheme}> {/* Use the custom theme */}
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
