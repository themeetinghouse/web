import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, Navigate, useLocation, Routes } from 'react-router-dom';
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
  const [redirect, setRedirect] = React.useState<RedirectType | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location.pathname.slice(1) !== '') {
          const { data } = await getRedirect(location.pathname.slice(1));
          if (data?.getRedirect?.id && data?.getRedirect?.to) {
            setRedirect(data?.getRedirect);
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
  }, [location.pathname]);
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: 'instant',
    };
    window.scrollTo(scrollOptions as any);
  }, [location.pathname]);
  const externalRedirectRegex = new RegExp(/https?:|\.pdf/);

  if (!redirect) {
    return null;
  }
  const redirectExists = redirect && redirect.to && redirect.to.length > 0;
  const isExternalRedirect = externalRedirectRegex.test(redirect.to);
  return (
    <Routes>
      <Route
        path="*"
        element={
          redirectExists ? (
            isExternalRedirect ? (
              <ExternalRedirect url={redirect.to}></ExternalRedirect>
            ) : (
              <Navigate to={redirect.to} replace />
            )
          ) : (
            <ContentPage />
          )
        }
      />
      <Route path={'/videos/:series/:episode'} element={<Videos />} />

      <Route path={'/videos/:series'} element={<Videos />} />

      <Route
        path="/playlist/:playlist/:episode"
        element={<Videos isPlaylist />}
      />

      <Route path="/posts/:blog" element={<Blog />} />

      <Route path="/notes/:date?" element={<Notes />} />

      <Route
        path="/archive/:archiveType(series|video)/:subclass"
        element={<Archive />}
      />

      <Route path="/podcast/:pod" element={<Podcast />} />
    </Routes>
  );
}

function ExternalRedirect({ url }: { url: string }) {
  window.location.href = url;
  return null;
}
