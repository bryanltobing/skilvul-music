import React, { useContext, useEffect, useMemo, useState } from 'react';
import { getAuthorizeInformation, removeHashParamsFromUrl } from 'utils/utils';

interface IAuthorizeInformation {
  access_token?: string;
  expires_in?: string | Number;
  token_type?: string;
}

const AuthorizationContext = React.createContext({});

const {
  access_token,
  expires_in,
}: IAuthorizeInformation = getAuthorizeInformation();
removeHashParamsFromUrl();

export const AuthorizationProvider: React.FC = ({ children }) => {
  const storageAuthorizeData = localStorage.getItem('authorize-info');

  const parsedStorageAuthorizeData: IAuthorizeInformation = useMemo(() => {
    if (storageAuthorizeData) {
      return JSON.parse(storageAuthorizeData);
    }
  }, [storageAuthorizeData]);

  const [
    authorizeInfoState,
    setAuthorizeInfoState,
  ] = useState<IAuthorizeInformation>(parsedStorageAuthorizeData);

  const handleAuthorizeInfo = (): void => {
    const now = new Date();
    const expiresDateFormat = now.setMinutes(
      now.getMinutes() + Number(expires_in) / 60
    );

    const data = { access_token, expires_in: Number(expiresDateFormat) };

    // State
    setAuthorizeInfoState(data);

    // Local Storage
    const parsedStringify = JSON.stringify(data);

    localStorage.setItem('authorize-info', parsedStringify);
  };

  const getAuthorizeInfoStorage = localStorage.getItem('authorize-info');

  useEffect(() => {
    if (access_token) {
      handleAuthorizeInfo();
    }
  }, []);

  useEffect(() => {
    if (getAuthorizeInfoStorage) {
      const parsed = JSON.parse(getAuthorizeInfoStorage);

      if (new Date(parsed?.access_token) < new Date()) {
        localStorage.removeItem('authorize-info');
      }
    }
  }, [getAuthorizeInfoStorage]);

  return (
    <AuthorizationContext.Provider
      value={{ authorizeInfoState, setAuthorizeInfoState }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuthorization = () => useContext(AuthorizationContext);
