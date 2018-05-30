import React, { Component } from 'react'
import { Route, Switch, redirect } from 'react-router-dom'

import App from '../view/app'
import Home from '../view/home/home'
import Test from '../view/test/test'

class RouteMap extends Component {

  render () {
    return (
      <Switch>
        <Route path='/' component={ App }>
          <redirect path='' component={ Home }/>
          {/*<Route path='/home' component={ Home }/>*/}
          <Route path="test" component={ Test }/>
        </Route>>
      </Switch>
    )
  }
}

export default RouteMap