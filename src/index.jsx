import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'regenerator-runtime/runtime'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

import './global/styles.scss'

if (module.hot) {
  module.hot.accept()
}

Sentry.init({
  dsn: 'https://19a1718a324a47269fee819f166d6a01@sentry.io/1341789'
})

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
