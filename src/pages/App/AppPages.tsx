import AppWrapper from 'components/_common/wrapper/AppWrapper';
import { PlaylistContainer } from 'containers/App/PlaylistContainer';
import { ProfileContainer } from 'containers/App/ProfileContainer';

const AppPages = () => {
  return (
    <AppWrapper>
      <ProfileContainer />
      <PlaylistContainer />
    </AppWrapper>
  );
};

export default AppPages;
