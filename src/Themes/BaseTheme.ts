import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
      contrastText: '#fff'
    }
  }
});

export default baseTheme;
