import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from "history";
interface Props extends RouteComponentProps<any> {
  match: any
  history: History<any>
}
interface State {
  content: any
}

const HomePage = lazy(() => import('./pages/HomePage'));
const Admin = lazy(() => import('./pages/admin/index'));
const ImportVideo = lazy(() => import('./pages/admin/import-video'));
const CreateBlog = lazy(() => import('./pages/admin/create-blog'));
const CreateNotes = lazy(() => import('./pages/admin/create-notes'));

class App extends React.Component<Props, State>  {
  render() {
    return (
      <Suspense fallback={<div></div>}>
        <Switch key={this.props.location.pathname}>
          <Route exact path="/" render={props => <HomePage pageType="default" {...props} />} />
          <Route path="/admin/import-video" render={() => <ImportVideo />} />
          <Route path="/admin/create-blog" render={() => <CreateBlog />} />
          <Route path="/admin/create-notes" render={() => <CreateNotes />} />
          <Route path="/admin" render={() => <Admin />} />
          <Route path="/videos/:series/:episode" render={props => <HomePage pageType="video" {...props} />} />
          <Route path="/videos/:series" render={props => <HomePage pageType="video" {...props} />} />
          <Route path="/posts/:blog" render={props => <HomePage pageType="blog" {...props} />} />
          <Route path="/notes/:note" render={props => <HomePage pageType="note" {...props} />} />
          <Route path="/archive/:archiveType/:subclass" render={props => <HomePage pageType="archive" {...props} />} />
          <Route path="/:id" render={props => <HomePage pageType="default" {...props} />} />
        </Switch>
      </Suspense>
    )
  }
}
export default withRouter(App)