import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Layout } from 'antd'
import Home from '../../home/home'
import Test from '../../test/test'

const { Content } = Layout

class Main extends Component {
  render () {
    return (
      <Content className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/test" component={Test}/>
        </Switch>
      </Content>
    )
  }
}

export default Main