import { Stack } from '@chakra-ui/layout';
import React from 'react';

const AppWrapper: React.FC = ({ children }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      marginY={8}
      flexDirection="column"
      spacing={10}
    >
      {children}
    </Stack>
  );
};

export default AppWrapper;
