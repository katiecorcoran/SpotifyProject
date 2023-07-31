import { createTheme } from '@mui/material';

const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1db954',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
    },
});

export default customTheme;