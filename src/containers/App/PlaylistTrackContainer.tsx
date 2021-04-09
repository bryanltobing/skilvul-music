import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { requestPlaylistTrack } from 'fetcher/spotify';
import { history } from 'index';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

interface IParams {
  playlistId: string;
}

interface ITrack {
  name: string;

  album: {
    images: {
      height: number;
      width: number;
      url: string;
    }[];
  };
}

interface IPLaylistTrack {
  track: ITrack;
  id: string;
}

const PlaylistTrackContainer = () => {
  const params: IParams = useParams();

  const [playlistTrack, setPlaylistTrack] = useState<IPLaylistTrack[]>([]);

  useEffect(() => {
    requestPlaylistTrack(params?.playlistId, 10, 0).then((response) => {
      setPlaylistTrack(response?.items);
    });
  }, [params]);

  return (
    <Stack marginY={4} spacing={6}>
      <Button onClick={() => history.goBack()} fontSize="1.6rem">
        Back
      </Button>
      {playlistTrack?.map((data) => {
        return (
          <Flex
            border="1px"
            key={data?.id}
            padding={4}
            alignItems="center"
            transition="ease"
            transitionDuration="0.5s"
            cursor="pointer"
            _hover={{
              backgroundColor: 'white',
              color: 'black',
            }}
            color="white"
          >
            <Box width="100px" height="100px" marginRight={10}>
              <Image src={data.track?.album.images?.[0]?.url} width="full" />
            </Box>
            <Text fontSize="1.6rem">{data?.track?.name}</Text>
          </Flex>
        );
      })}
    </Stack>
  );
};

export { PlaylistTrackContainer };
