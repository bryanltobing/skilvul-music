import React, { useState } from 'react';
import { useAuthorization } from 'contexts/AuthorizationContext';
import { requestSpotifyProfile } from 'fetcher/spotify';
import { useEffect } from 'react';
import { Stack, Text } from '@chakra-ui/layout';

interface ISpotifyProfileData {
  country: string;
  display_name: string;
  href: string;
  id: string;
  product: string;
}

const ProfileContainer: React.FC = () => {
  const [
    spotifyProfileData,
    setSpotifyProfileData,
  ] = useState<ISpotifyProfileData>();

  const { authorizeInfoState } = useAuthorization();

  useEffect(() => {
    if (authorizeInfoState?.access_token) {
      requestSpotifyProfile().then((response: ISpotifyProfileData) => {
        setSpotifyProfileData(response);
      });
    }
  }, [authorizeInfoState]);

  return (
    <Stack
      border="1px"
      borderColor="green.primary"
      padding={30}
      textAlign="left"
    >
      <Text fontSize="2.4rem" color="light.primary" fontWeight="bold">
        {spotifyProfileData?.display_name}
      </Text>
      <Text fontSize="2rem" color="light.primary">
        Country : {spotifyProfileData?.country}
      </Text>
      <Text fontSize="2rem" color="light.primary" textTransform="capitalize">
        Subscription type : {spotifyProfileData?.product}
      </Text>
    </Stack>
  );
};

export { ProfileContainer };
