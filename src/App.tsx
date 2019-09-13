import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Admin from './pages/admin/index';
import Videos from './pages/admin/videos';
import Blogs from './pages/admin/blog';
import Events from './pages/admin/events';
import News from './pages/admin/news';
import Locations from './pages/admin/locations';
import Imports from './pages/admin/imports';

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
      <Route path="/admin/imports"  render={() => <Imports />}/>
      <Route path="/admin/blog"  render={() => <Blogs />}/>
      <Route path="/admin/events"  render={() => <Events />}/>
      <Route path="/admin/videos"  render={() => <Videos />}/>
      <Route path="/admin/locations"  render={() => <Locations />}/>
      <Route path="/admin/news"  render={() => <News />}/>
      <Route path="/admin"  render={() => <Admin />}/>
      <Route path="/teaching/:series/:episode"  render={props => <HomePage  isVideo="true" {...props} />}/>
      <Route path="/teaching/:series"  render={props => <HomePage isVideo="true" {...props} />}/>
      <Route path="/:id"  render={props => <HomePage isVideo="false" {...props} />}/>
    </Switch>
  )
  }
}
export default withRouter(App)