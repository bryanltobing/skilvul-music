import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'utils/theme';
import { AuthorizationProvider } from 'contexts/AuthorizationContext';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const root = document.getElementById('root');

export const history = createBrowserHistory();

ReactDOM.render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <Router history={history}>
      <AuthorizationProvider>
        <App />
      </AuthorizationProvider>
    </Router>
  </ChakraProvider>,
  root
);
