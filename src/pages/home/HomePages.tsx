import { SpotifyLoginContainer } from 'containers/SpotifyLogin/SpotifyLoginContainer';
import { useAuthorization } from 'contexts/AuthorizationContext';
import { Redirect } from 'react-router';

const HomePages = () => {
  const { authorizeInfoState } = useAuthorization();

  if (authorizeInfoState?.access_token) {
    return <Redirect to="/app" />;
  }

  return <SpotifyLoginContainer />;
};

export default HomePages;
