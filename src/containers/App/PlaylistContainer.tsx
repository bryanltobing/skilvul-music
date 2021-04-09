import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { requestSpotifyPlaylist } from 'fetcher/spotify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ISpotifyImagesPlaylist {
  height: number;
  url: string;
  width: number;
}

interface ISpotifyPlaylist {
  name: string;
  id: string;
  images: ISpotifyImagesPlaylist[];
}

const PlaylistContainer = () => {
  const [spotifyPlaylist, setSpotifyPlaylist] = useState<ISpotifyPlaylist[]>(
    []
  );

  useEffect(() => {
    requestSpotifyPlaylist(10).then((response) => {
      setSpotifyPlaylist(response?.items);
    });
  }, []);

  return (
    <Box fontSize="2.4rem" color="light.primary">
      <Heading color="light.primary" textDecoration="underline">
        Playlist
      </Heading>
      <Stack marginY={4} spacing={6}>
        {spotifyPlaylist?.map((data) => {
          return (
            <Link to={`/app/playlist/${data.id}`}>
              <Flex
                borderColor="light.primary"
                border="1px"
                key={data?.id}
                padding={4}
                alignItems="center"
                transition="ease"
                transitionDuration="0.5s"
                cursor="pointer"
                _hover={{
                  backgroundColor: 'light.primary',
                  color: 'dark.primary',
                }}
              >
                <Box width="100px" height="100px" marginRight={10}>
                  <Image src={data.images[0].url} width="full" />
                </Box>
                <Text fontSize="1.6rem">{data?.name}</Text>
              </Flex>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export { PlaylistContainer };
