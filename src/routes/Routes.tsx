import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { WrapAuthentication } from './WrapAuthentication';

const HomePagesLoad = loadable(() => import('pages/home/HomePages'));
const AppPagesLoad = loadable(() => import('pages/App/AppPages'));
const PlaylistTrackPagesLoad = loadable(
  () => import('pages/App/PlaylistTrackPages')
);

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePagesLoad />
      </Route>

      <Route path="/app" exact>
        <WrapAuthentication>
          <AppPagesLoad />
        </WrapAuthentication>
      </Route>

      <Route path="/app/playlist/:playlistId" exact>
        <WrapAuthentication>
          <PlaylistTrackPagesLoad />
        </WrapAuthentication>
      </Route>
    </Switch>
  );
};

export { Routes };
