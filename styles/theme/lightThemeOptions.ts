import { ThemeOptions } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
    },
  },
  typography: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'sm',
      },
      styleOverrides: {
        maxWidthSm: {
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'inherit',

          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
  },
};
