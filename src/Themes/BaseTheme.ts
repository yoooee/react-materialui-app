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
    MuiListItem: {
      root: {
        color: '#0000ff',
        backgroundColor: 'darkGrey',
        '&:hover': {
          backgroundColor: 'pink'
        }
      }
    },
    MuiListItemText: {
      root: {
        color: '#ffffff'
      }
    },
    MuiListItemIcon: {
      root: {
        color: '#ffffff'
      }
    }
  }
});

export default baseTheme;
