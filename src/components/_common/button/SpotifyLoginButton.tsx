import { Button } from '@chakra-ui/button';
import React from 'react';
import { GrSpotify } from 'react-icons/gr';

const SpotifyLoginButton: React.FC = () => {
  return (
    <Button
      leftIcon={<GrSpotify fontSize={23} color="white" />}
      backgroundColor="green.primary"
      color="light.primary"
      borderRadius="500px"
      padding="2.4rem 4rem"
      fontSize="1.6rem"
      _hover={{
        backgroundColor: 'green.400',
        marginTop: '10px',
      }}
      _active={{
        backgroundColor: 'green.400',
      }}
    >
      CONTINUE WITH SPOTIFY
    </Button>
  );
};

export { SpotifyLoginButton };
