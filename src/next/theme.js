import { createMuiTheme } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0000e8',
      dark: '#0000b4',
    },
    secondary: {
      main: '#0000ff',
      dark: '#0000ca',
    },
    text: {
    },
  },
});

export default theme;