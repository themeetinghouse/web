import React, { lazy } from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { Route, Switch } from 'react-router-dom';
const ImportVideo = lazy(() => import('../../pages/admin/import-video'));
const CreateBlog = lazy(() => import('../../pages/admin/create-blog'));
const CreateNotes = lazy(() => import('../../pages/admin/create-notes'));
const AddLive = lazy(() => import('../../pages/admin/livestream'));
const GetInsta = lazy(() => import('../../pages/admin/instagram'));
const Announcements = lazy(() => import('../../pages/admin/Announcements'));
Amplify.configure(awsmobile);

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
            path="/account/admin/create-blog"
            render={() => <CreateBlog />}
          />
          <Route
            path="/account/admin/create-notes"
            render={() => <CreateNotes />}
          />
          <Route path="/account/admin/livestream" render={() => <AddLive />} />
          <Route path="/account/admin/instagram" render={() => <GetInsta />} />
          <Route
            path="/account/admin/announcements"
            render={() => <Announcements />}
          />
        </Switch>
      </div>
    );
  }
}
export default Admin;
