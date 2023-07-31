import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ClearCache } from './ClearCache';
const VideoManager = lazy(() => import('./VideoManager/videos'));
const ImportVideo = lazy(() => import('../../pages/admin/import-video'));
const MoveVideo = lazy(() => import('../../pages/admin/move-video'));
const CreateBlog = lazy(() => import('../../pages/admin/create-blog'));
const CreateNotes = lazy(() => import('../../pages/admin/create-notes'));
const AddLive = lazy(() => import('../../pages/admin/livestream'));
const GetInsta = lazy(() => import('../../pages/admin/instagram'));
const Announcements = lazy(() => import('../../pages/admin/Announcements'));
const HomeChurch = lazy(() => import('../../pages/admin/homechurch'));
const Redirect = lazy(() => import('../../pages/admin/Redirect'));
const Editor = lazy(() => import('./Editor/Editor'));
const PeopleManager = lazy(() => import('./PeopleManager/PeopleManager'));
const LocationsManager = lazy(() => import('./locations/locations'));
const PermissionsManager = lazy(
  () => import('./PermissionsManager/PermissionsManager')
);
class Admin extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/account/admin/import-video"
            render={() => <ImportVideo />}
          />
          <Route
            path="/account/admin/move-video"
            render={() => <MoveVideo />}
          />
          <Route
            path="/account/admin/create-blog"
            render={() => <CreateBlog />}
          />
          <Route
            path="/account/admin/create-notes"
            render={() => <CreateNotes />}
          />
          <Route path="/account/admin/livestream" render={() => <AddLive />} />
          <Route path="/account/admin/videos" render={() => <VideoManager />} />
          <Route
            path="/account/admin/permissions"
            render={() => <PermissionsManager />}
          />
          <Route path="/account/admin/instagram" render={() => <GetInsta />} />
          <Route path="/account/admin/editor" render={() => <Editor />} />
          <Route
            path="/account/admin/clearCache"
            render={() => <ClearCache />}
          />
          <Route
            path="/account/admin/announcements"
            render={() => <Announcements />}
          />
          <Route
            path="/account/admin/homechurches"
            render={() => <HomeChurch />}
          />
          <Route
            path="/account/admin/locations"
            render={() => <LocationsManager />}
          />
          <Route path="/account/admin/redirects" render={() => <Redirect />} />
          <Route
            path="/account/admin/people"
            render={() => <PeopleManager />}
          />
        </Switch>
      </div>
    );
  }
}
export default Admin;
