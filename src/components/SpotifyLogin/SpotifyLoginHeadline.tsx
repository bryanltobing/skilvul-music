import { Box, Heading } from '@chakra-ui/layout';
import { Fade } from '@chakra-ui/transition';
import React from 'react';

const SpotifyLoginHeadline: React.FC = () => {
  return (
    <Box maxWidth="800px" textAlign="center">
      <Fade in={true}>
        <Heading
          fontSize={{ base: '5rem', md: '7rem', lg: '15.6rem' }}
          color="green.primary"
          transform="translate(125px, 0px);"
          style={{ textIndent: '-3.3em' }}
          paddingBottom="40px"
          lineHeight={{ base: '80px', md: '40px', lg: '166px' }}
        >
          Listening is everything
        </Heading>
      </Fade>
    </Box>
  );
};

export { SpotifyLoginHeadline };
