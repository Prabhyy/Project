import { createTheme } from '@material-ui/core/styles';

// Importing colors to use in the theme
import { red, grey } from '@material-ui/core/colors';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      // Setting the primary color to a shade of red
      main: red[500], // You can adjust the shade as needed
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
    openTitle: red[500], // Updated to match the primary color
    protectedTitle: red[400], // You can adjust this shade as well
    type: 'light',
    // Adding a background with a linear gradient
    background: {
      default: `linear-gradient(45deg, ${red[500]}, ${grey[100]})`, // Adjust the gradient as needed
    },
  },
});

export default theme;
