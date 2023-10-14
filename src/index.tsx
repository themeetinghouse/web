import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { version } from './version';
import ErrorBoundry from './components/ErrorBoundry';
import { Amplify } from '@aws-amplify/core';
import AmplifyConfig from '../src/aws-exports';
let env = 'unknown';
if (window.location.hostname === 'localhost') env = 'dev';
else if (window.location.hostname.includes('beta')) env = 'beta';
else env = 'prod';
Amplify.configure(AmplifyConfig);
Sentry.init({
  dsn: 'https://38e8f0bc706a4d968e1ff3ebf638a090@o390245.ingest.sentry.io/5231570',
  environment: env,
  release: version.git,
  ignoreErrors: [
    'TypeError: Failed to fetch',
    'TypeError: NetworkError when attempting to fetch resource.',
    'TypeError: Cancelled',
  ],
});
const rootElement = document.getElementById('root');
ReactDOM.render(
  <CookiesProvider>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </CookiesProvider>,
  rootElement
);
