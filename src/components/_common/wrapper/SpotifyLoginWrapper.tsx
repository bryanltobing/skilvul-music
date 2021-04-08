import { Stack } from '@chakra-ui/layout';
import React from 'react';

const SpotifyLoginWrapper: React.FC = ({ children }) => {
  return (
    <Stack
      direction="column"
      spacing={30}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      {children}
    </Stack>
  );
};

export { SpotifyLoginWrapper };
