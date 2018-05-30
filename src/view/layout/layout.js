import React, { Component } from 'react'
// import { Switch, Route } from 'react-router-dom'

import { Layout } from 'antd'
import HeaderContent from './components/headerContent'
import MenuContent from './components/menuContent'
import BreadcrumbContent from './components/breadcrumbContent'
import Main from './components/main'

import './layout.css'
// import Home from "../home/home";
// import Test from "../test/test";

const { Sider, Content } = Layout

class AppLayout extends Component {
  render () {
    return (
      <Layout className="layout">
        <HeaderContent/>
        <Layout>
          <Sider width={200} className="sider">
            <MenuContent/>
          </Sider>
          <Layout>
            <BreadcrumbContent/>
            <Main/>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default AppLayout