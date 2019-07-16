import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import qrcode from './pages/qrcode'

// const routerConfig = [
//   {
//     path: '/qrcode',
//     component: qrcode
//   }
// ]

export default class BasicRoute extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/qrcode" component={ qrcode } />
        </Switch>
      </Router>
    )
  }
}