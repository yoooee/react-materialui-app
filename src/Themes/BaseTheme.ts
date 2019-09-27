import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red, indigo } from '@material-ui/core/colors';

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: indigo[500]
    },
    error: {
      main: red[500]
    }
  },
  overrides: {
    MuiInputBase: {
      root: {
        '&$focused': {
          border: '3px solid yellow'
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        color: '#0000ff',
        backgroundColor: 'darkGrey',
        '&:hover': {
          backgroundColor: 'pink'
        },
        '&focused': {
          border: '3px solid red'
        }
      }
    }
  }
});

export default baseTheme;
