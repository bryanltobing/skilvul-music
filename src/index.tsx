import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'utils/theme';

const root = document.getElementById('root');

ReactDOM.render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <App />
  </ChakraProvider>,
  root
);
