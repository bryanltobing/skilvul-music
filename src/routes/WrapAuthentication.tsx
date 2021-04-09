import { useAuthorization } from 'contexts/AuthorizationContext';
import React from 'react';
import { Redirect } from 'react-router';

export const WrapAuthentication: React.FC = ({ children }) => {
  const { authorizeInfoState } = useAuthorization();

  if (!authorizeInfoState?.access_token) {
    return <Redirect to="/" />;
  }

  return <div>{children}</div>;
};
