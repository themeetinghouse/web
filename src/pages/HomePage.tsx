import Amplify from 'aws-amplify';
import React, { ReactNode } from 'react';
import ReactGA from 'react-ga';
import { Route, Switch, withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import awsconfig from '../../src/aws-exports';
import '../custom.scss';
import ContentPage from 'components/Loaders/ContentPage';

const Videos = React.lazy(() => import('../components/Loaders/Videos'));
const Blog = React.lazy(() => import('../components/Loaders/Blog'));
const Notes = React.lazy(() => import('../components/Loaders/Notes'));
const Archive = React.lazy(() => import('../components/Loaders/Archive'));

if (window.location.hostname === "localhost")
  ReactGA.initialize('UA-4554612-19');
else if (window.location.hostname.includes("beta"))
  ReactGA.initialize('UA-4554612-19');
else
  ReactGA.initialize('UA-4554612-3');

Amplify.configure(awsconfig);

const redirectData = fetch('/static/data/redirect.json').then<Array<{
  id: string;
  to: string;
}>>((response) => response.json());

export interface RouteParams {
  id?: string;
  blog?: string;
  episode?: string;
  series?: string;
  note?: string;
  playlist?: string;
}

interface State {
  redirects?: Array<{ id: string; to: string }>;
}

class HomePage extends React.Component<RouteComponentProps, State> {
  private unregisterGAListener: (() => void) | null = null;

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    redirectData.then((redirects) => {
      this.setState({ redirects });
    });

    this.unregisterGAListener = this.props.history.listen(location => {
      ReactGA.pageview(location.pathname + location.search);
    });
  }

  componentWillUnmount() {
    this.unregisterGAListener?.();
  }

  render() {
    const { redirects } = this.state;
    const regex = new RegExp(/https?:|\.pdf/)
    if (!redirects) {
      return null;
    }

    return (
      <Switch location={this.props.location}>
        {
          redirects.map(redirect => {
            return regex.test(redirect.to)
              ? <Route key={redirect.id} exact from={'/' + redirect.id} render={(): ReactNode | undefined => {
                window.location.href = redirect.to;
                return undefined;
              }} />
              : <Redirect key={redirect.id} exact from={'/' + redirect.id} to={redirect.to} />;
          })
        }
        <Route path={["/videos/:series/:episode", "/videos/:series"]} component={Videos} />
        <Route path="/playlist/:playlist/:episode" component={() => <Videos isPlaylist />} />
        <Route path="/posts/:blog" component={Blog} />
        <Route path="/notes/:date?" component={Notes} />
        <Route path="/archive/:archiveType(series|video)/:subclass" component={Archive} />
        <Route component={ContentPage} />
      </Switch>
    );
  }
}

export default withRouter(HomePage);
