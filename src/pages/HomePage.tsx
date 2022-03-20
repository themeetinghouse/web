import React from 'react';
import ReactGA from 'react-ga';
import Amplify from 'aws-amplify';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import { captureException } from '@sentry/browser';
import { getRedirect, Redirect as RedirectType } from './getRedirects';
import awsconfig from '../../src/aws-exports';
import '../custom.scss';
const ContentPage = React.lazy(() => import('components/Loaders/ContentPage'));
const Videos = React.lazy(() => import('../components/Loaders/Videos'));
const Blog = React.lazy(() => import('../components/Loaders/Blog'));
const Notes = React.lazy(() => import('../components/Loaders/Notes'));
const Archive = React.lazy(() => import('../components/Loaders/Archive'));
const Podcast = React.lazy(() => import('../components/Loaders/Podcast'));

if (window.location.hostname === 'localhost')
  ReactGA.initialize('UA-4554612-19');
else if (window.location.hostname.includes('beta'))
  ReactGA.initialize('UA-4554612-19');
else ReactGA.initialize('UA-4554612-3');

Amplify.configure(awsconfig);

export interface RouteParams {
  id?: string;
  blog?: string;
  episode?: string;
  series?: string;
  note?: string;
  playlist?: string;
  pod?: string;
}

interface State {
  redirect?: RedirectType;
}

class HomePage extends React.Component<RouteComponentProps, State> {
  private unregisterGAListener: (() => void) | null = null;

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getRedirect(window.location.pathname.slice(1))
      .then(({ data }) => {
        if (data?.getRedirect?.id && data?.getRedirect?.to) {
          this.setState({ redirect: data.getRedirect });
        } else {
          // set non-null state as we want the rest of the app to load
          this.setState({ redirect: { id: '', to: '' } as RedirectType });
        }
      })
      .catch((e: any) => {
        if (e.errors) captureException(e.errors);
        else captureException(e);
        // set non-null state as we want the rest of the app to load
        this.setState({ redirect: { id: '', to: '' } as RedirectType });
      });

    this.unregisterGAListener = this.props.history.listen((location: any) => {
      ReactGA.pageview(location.pathname + location.search);
    });
  }

  componentWillUnmount() {
    this.unregisterGAListener?.();
  }

  render() {
    const { redirect } = this.state;
    const externalRedirectRegex = new RegExp(/https?:|\.pdf/);

    if (!redirect) {
      return null;
    }

    return (
      <Switch location={this.props.location}>
        {redirect.id.length > 0 && redirect.to.length > 0 ? (
          externalRedirectRegex.test(redirect.to) ? (
            <Route
              exact
              path={'/' + redirect.id}
              render={() => {
                window.location.href = redirect.to;
                return null;
              }}
            />
          ) : (
            <Redirect exact from={'/' + redirect.id} to={redirect.to} />
          )
        ) : null}
        <Route
          path={['/videos/:series/:episode', '/videos/:series']}
          component={Videos}
        />
        <Route
          path="/playlist/:playlist/:episode"
          component={() => <Videos isPlaylist />}
        />
        <Route path="/posts/:blog" component={Blog} />
        <Route path="/notes/:date?" component={Notes} />
        <Route
          path="/archive/:archiveType(series|video)/:subclass"
          component={Archive}
        />
        <Route path="/podcast/:pod" component={Podcast} />
        <Route component={ContentPage} />
      </Switch>
    );
  }
}

export default withRouter(HomePage);
