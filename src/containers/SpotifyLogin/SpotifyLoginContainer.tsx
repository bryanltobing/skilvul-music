import React from 'react';
import { SpotifyLoginButton } from 'components/_common/button/SpotifyLoginButton';
import { SpotifyLoginWrapper } from 'components/_common/wrapper/SpotifyLoginWrapper';
import { SpotifyLoginHeadline } from 'components/SpotifyLogin/SpotifyLoginHeadline';

const SpotifyLoginContainer: React.FC = () => {
  return (
    <SpotifyLoginWrapper>
      <SpotifyLoginHeadline />
      <SpotifyLoginButton />
    </SpotifyLoginWrapper>
  );
};

export { SpotifyLoginContainer };
