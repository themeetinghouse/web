import React, { lazy } from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import { Route, Switch } from 'react-router-dom';
const ImportVideo = lazy(() => import('../../pages/admin/import-video'));
const MoveVideo = lazy(() => import('../../pages/admin/move-video'));
const CreateBlog = lazy(() => import('../../pages/admin/create-blog'));
const CreateNotes = lazy(() => import('../../pages/admin/create-notes'));
const AddLive = lazy(() => import('../../pages/admin/livestream'));
const GetInsta = lazy(() => import('../../pages/admin/instagram'));
const Announcements = lazy(() => import('../../pages/admin/Announcements'));
const HomeChurch = lazy(() => import('../../pages/admin/homechurch'));
const Redirect = lazy(() => import('../../pages/admin/Redirect'));
const Editor = lazy(() => import('../../pages/admin/Editor/Editor'));

class Admin extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#e5e5e5', minHeight: 300 }}>
        <AdminMenu />
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
          <Route path="/account/admin/instagram" render={() => <GetInsta />} />
          <Route path="/account/admin/editor" render={() => <Editor />} />
          <Route
            path="/account/admin/announcements"
            render={() => <Announcements />}
          />
          <Route
            path="/account/admin/homechurches"
            render={() => <HomeChurch />}
          />
          <Route path="/account/admin/redirects" render={() => <Redirect />} />
        </Switch>
      </div>
    );
  }
}
export default Admin;
