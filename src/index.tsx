import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'
import { createBrowserHistory,History } from "history";


var history:History<any>= createBrowserHistory()


render((
  <Router history={history}>
    <App/>
  </Router>),
  document.querySelector('#root')
)


