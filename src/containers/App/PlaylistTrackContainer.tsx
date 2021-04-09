import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/layout';
import { MusicTrack } from 'components/App/MusicTrack';
import { requestPlaylistTrack } from 'fetcher/spotify';
import { history } from 'index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

interface IParams {
  playlistId: string;
}

export interface ITrack {
  name: string;
  id: string;
  album: {
    images: {
      height: number;
      width: number;
      url: string;
    }[];
  };
}

export interface IPLaylistTrack {
  track: ITrack;
}

const PlaylistTrackContainer = () => {
  const params: IParams = useParams();

  const [playlistTrack, setPlaylistTrack] = useState<IPLaylistTrack[]>([]);

  useEffect(() => {
    requestPlaylistTrack(params?.playlistId, 10, 0).then((response) => {
      setPlaylistTrack(response?.items);
    });
  }, [params]);

  const handleDeleteOne = (id: string) => {
    const spreadTheData = [...playlistTrack];

    const newData = spreadTheData?.filter((data) => {
      return data.track.id !== id;
    });

    setPlaylistTrack(newData);
  };

  return (
    <Stack marginY={4} spacing={6}>
      <Button onClick={() => history.goBack()} fontSize="1.6rem">
        Back
      </Button>
      {playlistTrack?.map((data) => {
        return (
          <MusicTrack
            key={data?.track.id}
            images={data?.track?.album.images?.[0]?.url}
            trackName={data?.track?.name}
            id={data?.track.id}
            handleDeleteTrack={handleDeleteOne}
          />
        );
      })}
    </Stack>
  );
};

export { PlaylistTrackContainer };
