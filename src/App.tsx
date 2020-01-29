import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from "history";
import HomePage from './pages/HomePage';
interface Props extends RouteComponentProps<any> {
  match: any
  history: History<any>
}
interface State {
  content: any
}


const Admin = lazy(() => import('./pages/admin/index'));
const ImportVideo = lazy(() => import('./pages/admin/import-video'));


class App extends React.Component<Props, State>  {
  render() {
    return (
      <Suspense fallback={<div></div>}>
        <Switch key={this.props.location.pathname}>
          <Route exact path="/" render={props => <HomePage isVideo="false" {...props} />} />
          <Route path="/admin/import-video" render={() => <ImportVideo />} />
          <Route path="/admin" render={() => <Admin />} />
          <Route path="/videos/:series/:episode" render={props => <HomePage isVideo="true" {...props} />} />
          <Route path="/videos/:series" render={props => <HomePage isVideo="true" {...props} />} />
          <Route path="/:id" render={props => <HomePage isVideo="false" {...props} />} />
        </Switch>
      </Suspense>
    )
  }
}
export default withRouter(App)