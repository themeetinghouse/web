import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { captureException } from '@sentry/browser';
import { getRedirect, Redirect as RedirectType } from './getRedirects';
import '../custom.scss';

const ContentPage = React.lazy(() => import('components/Loaders/ContentPage'));
const Videos = React.lazy(() => import('../components/Loaders/Videos'));
const Blog = React.lazy(() => import('../components/Loaders/Blog'));
const Notes = React.lazy(() => import('../components/Loaders/Notes'));
const Archive = React.lazy(() => import('../components/Loaders/Archive'));
const Podcast = React.lazy(() => import('../components/Loaders/Podcast'));

export interface RouteParams {
  id?: string;
  blog?: string;
  episode?: string;
  series?: string;
  note?: string;
  playlist?: string;
  pod?: string;
}

if (window.location.hostname === 'localhost') {
  ReactGA.initialize('UA-4554612-19');
} else if (window.location.hostname.includes('beta')) {
  ReactGA.initialize('UA-4554612-19');
} else {
  ReactGA.initialize('UA-4554612-3');
}
interface ApiError {
  errors: string[];
}

export default function HomePage() {
  const location = useLocation();
  const history = useHistory();

  const [redirect, setRedirect] = React.useState<RedirectType | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location.pathname.slice(1) !== '') {
          const { data } = await getRedirect(location.pathname.slice(1));
          if (data?.getRedirect?.id && data?.getRedirect?.to) {
            setRedirect(data.getRedirect);
          } else {
            setRedirect({ id: '', to: '' } as RedirectType);
          }
        } else {
          setRedirect({ id: '', to: '' } as RedirectType);
        }
      } catch (e: unknown) {
        const APIError = e as ApiError;
        if (APIError.errors) {
          captureException(APIError.errors);
        } else {
          captureException(e);
        }
        setRedirect({ id: '', to: '' } as RedirectType);
      }
    };

    fetchData();

    const unregisterGAListener = history.listen((location) => {
      ReactGA.pageview(location.pathname + location.search);
      const scrollOptions = {
        top: 0,
        left: 0,
        behavior: 'instant',
      };
      window.scrollTo(scrollOptions as any);
    });

    return () => {
      unregisterGAListener();
    };
  }, [location.pathname, history]);

  const externalRedirectRegex = new RegExp(/https?:|\.pdf/);

  if (!redirect) {
    return null;
  }

  return (
    <Switch>
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
      <Route path={['/videos/:series/:episode', '/videos/:series']}>
        <Videos />
      </Route>
      <Route path="/playlist/:playlist/:episode">
        <Videos isPlaylist />
      </Route>
      <Route path="/posts/:blog">
        <Blog />
      </Route>
      <Route path="/notes/:date?">
        <Notes />
      </Route>
      <Route path="/archive/:archiveType(series|video)/:subclass">
        <Archive />
      </Route>
      <Route path="/podcast/:pod">
        <Podcast />
      </Route>
      <Route>
        <ContentPage />
      </Route>
    </Switch>
  );
}
