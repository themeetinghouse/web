import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'
import { createBrowserHistory, History } from "history";
import { CookiesProvider } from 'react-cookie';


var history: History<any> = createBrowserHistory()


render((
  <Router history={history}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Router>),
  document.querySelector('#root')
)


