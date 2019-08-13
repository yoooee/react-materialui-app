import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
      contrastText: '#fff'
    },
    secondary: {
      light: '#0000ff',
      main: '#00ff00',
      dark: '#0000dd',
      contrastText: '#000'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#ff0000',
        backgroundColor: '#00ff00',
        '&:hover': {
          backgroundColor: 'purple'
        }
      }
    },
    MuiListItem: {
      root: {
        color: '#0000ff',
        backgroundColor: '#00ff00',
        selected: {
          backgroundColor: 'purple'
        }
      }
    }
  }
});

export default baseTheme;
