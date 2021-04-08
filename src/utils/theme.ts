import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    green: {
      primary: '#1db954',
    },
    dark: {
      primary: '#212121',
    },
    light: {
      primary: '#F0FFF4',
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: 'dark.primary',
        fontSize: '62.5%',
      },
    }),
  },
});

export { theme };
