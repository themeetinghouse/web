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
          <Route path="/account/admin/import-video">
            <ImportVideo />
          </Route>
          <Route path="/account/admin/move-video">
            <MoveVideo />
          </Route>
          <Route path="/account/admin/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/account/admin/create-notes">
            <CreateNotes />
          </Route>
          <Route path="/account/admin/livestream">
            <AddLive />
          </Route>
          <Route path="/account/admin/videos">
            <VideoManager />
          </Route>
          <Route path="/account/admin/permissions">
            <PermissionsManager />
          </Route>
          <Route path="/account/admin/instagram">
            <GetInsta />
          </Route>
          <Route path="/account/admin/editor">
            <Editor />
          </Route>
          <Route path="/account/admin/clearCache">
            <ClearCache />
          </Route>
          <Route path="/account/admin/announcements">
            <Announcements />
          </Route>
          <Route path="/account/admin/homechurches">
            <HomeChurch />
          </Route>
          <Route path="/account/admin/locations">
            <LocationsManager />
          </Route>
          <Route path="/account/admin/redirects">
            <Redirect />
          </Route>
          <Route path="/account/admin/people">
            <PeopleManager />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Admin;
