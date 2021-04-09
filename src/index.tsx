import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'utils/theme';
import { AuthorizationProvider } from 'contexts/AuthorizationContext';

const root = document.getElementById('root');

ReactDOM.render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <AuthorizationProvider>
      <App />
    </AuthorizationProvider>
  </ChakraProvider>,
  root
);
