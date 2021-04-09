import React from 'react';
import { SpotifyLoginButton } from 'components/_common/button/SpotifyLoginButton';
import { SpotifyLoginWrapper } from 'components/_common/wrapper/SpotifyLoginWrapper';
import { SpotifyLoginHeadline } from 'components/SpotifyLogin/SpotifyLoginHeadline';
import { authorizeAccount } from 'fetcher/spotify';

const SpotifyLoginContainer: React.FC = () => {
  const handleLoginClick = () => {
    window.open(authorizeAccount(), '_self');
  };

  return (
    <SpotifyLoginWrapper>
      <SpotifyLoginHeadline />
      <SpotifyLoginButton onClick={handleLoginClick} />
    </SpotifyLoginWrapper>
  );
};

export { SpotifyLoginContainer };
