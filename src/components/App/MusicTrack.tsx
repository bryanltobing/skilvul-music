import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import { SingleMusicModal } from './SingleMusicModal';

interface IPMusicTrack {
  id: string;
  images: string;
  trackName: string;
  handleDeleteTrack: (id: string) => void;
}

const MusicTrack: React.FC<IPMusicTrack> = (data) => {
  const [musicModalActive, setMusicModalActive] = useState(false);

  const handleConfirmation = () => {
    setMusicModalActive(false);
    data.handleDeleteTrack(data?.id);
  };

  return (
    <Flex
      border="1px"
      key={data?.id}
      padding={4}
      alignItems="center"
      transition="ease"
      transitionDuration="0.5s"
      _hover={{
        backgroundColor: 'white',
        color: 'black',
      }}
      color="white"
      justifyContent="space-between"
    >
      <Flex>
        <Box width="100px" height="100px" marginRight={10}>
          <Image src={data?.images} width="full" />
        </Box>
        <Text fontSize="1.6rem">{data?.trackName}</Text>
      </Flex>
      <Button
        backgroundColor="red.500"
        onClick={() => setMusicModalActive(true)}
      >
        Delete
      </Button>
      <SingleMusicModal
        isOpen={musicModalActive}
        onClose={() => setMusicModalActive(false)}
        onDelete={handleConfirmation}
      />
    </Flex>
  );
};

export { MusicTrack };
