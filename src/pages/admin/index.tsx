import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/account/admin/import-video" element={<ImportVideo />} />
          <Route path="/account/admin/move-video" element={<MoveVideo />} />
          <Route path="/account/admin/create-blog" element={<CreateBlog />} />
          <Route path="/account/admin/create-notes" element={<CreateNotes />} />
          <Route path="/account/admin/livestream" element={<AddLive />} />
          <Route path="/account/admin/videos" element={<VideoManager />} />
          <Route
            path="/account/admin/permissions"
            element={<PermissionsManager />}
          />
          <Route path="/account/admin/instagram" element={<GetInsta />} />
          <Route path="/account/admin/editor" element={<Editor />} />
          <Route path="/account/admin/clearCache" element={<ClearCache />} />
          <Route
            path="/account/admin/announcements"
            element={<Announcements />}
          />
          <Route path="/account/admin/homechurches" element={<HomeChurch />} />
          <Route
            path="/account/admin/locations"
            element={<LocationsManager />}
          />
          <Route path="/account/admin/redirects" element={<Redirect />} />
          <Route path="/account/admin/people" element={<PeopleManager />} />
        </Routes>
      </div>
    );
  }
}
export default Admin;
