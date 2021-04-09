import axios from 'axios';
import { history } from 'index';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      history.push('/');
      localStorage.clear();
    }

    return Promise.reject(error);
  }
);

const authorizeInfoStorage = localStorage.getItem('authorize-info');
const accessToken =
  authorizeInfoStorage && JSON.parse(authorizeInfoStorage)?.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

const scopes = [
  'user-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-private',
  'playlist-read-collaborative',
];

export const authorizeAccount = (): string => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;

  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
  )}&response_type=token`;
};

const apiEndpoint = 'https://api.spotify.com/v1';

export const requestSpotifyProfile = async () => {
  try {
    const response = await axios.get(`${apiEndpoint}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err?.response?.data;
  }
};

export const requestSpotifyPlaylist = async (
  limit: number,
  offset?: number
) => {
  try {
    const response = await axios.get(`${apiEndpoint}/me/playlists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (err) {
    throw err?.response?.data;
  }
};

export const requestPlaylistTrack = async (
  playlistId: string,
  limit?: number,
  offset?: number
) => {
  try {
    const response = await axios.get(
      `${apiEndpoint}/playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit,
          offset,
          market: 'ES',
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err?.response?.data;
  }
};
