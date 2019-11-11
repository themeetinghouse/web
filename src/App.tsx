import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Admin from './pages/admin/index';

import ImportVideo from './pages/admin/import-video';

import { withRouter, RouteComponentProps} from 'react-router-dom';
import {History } from "history";
interface Props extends RouteComponentProps<any> {
  match:any
  history:History<any>
}
interface State {
  content:any
}

class App extends React.Component<Props, State>  {
  render()
  {
  return (
    <Switch key={this.props.location.pathname}>
      <Route exact path="/"  render={props => <HomePage isVideo="false" {...props} />} />
      <Route path="/admin/import-video"  render={() => <ImportVideo />}/>
      <Route path="/admin"  render={() => <Admin />}/>
      <Route path="/videos/:series/:episode"  render={props => <HomePage  isVideo="true" {...props} />}/>
      <Route path="/videos/:series"  render={props => <HomePage isVideo="true" {...props} />}/>
      <Route path="/:id"  render={props => <HomePage isVideo="false" {...props} />}/>
    </Switch>
  )
  }
}
export default withRouter(App)