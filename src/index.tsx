import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import * as Sentry from '@sentry/browser'
import App from './App'
import { createBrowserHistory, History } from "history";
import { CookiesProvider } from 'react-cookie';
import { version } from './version'
let env = "unknown"
if (window.location.hostname === "localhost")
  env = "dev"
else if (window.location.hostname.includes("beta"))
  env = "beta"
else
  env = "prod"

Sentry.init({
  dsn: "https://38e8f0bc706a4d968e1ff3ebf638a090@o390245.ingest.sentry.io/5231570",
  environment: env,
  release: version.git
});

const history: History<any> = createBrowserHistory()


render((
  <Router history={history}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Router>),
  document.querySelector('#root')
)


