import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    // a dark blue
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: lightBlue[200],
    },
    error: {
      main: red.A400,
    },
    // white
    background: {
      default: 'white',
    },
  },
});

export default theme;