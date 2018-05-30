import React, { Component } from 'react'
import { Layout } from 'antd'
import logo from '../../../assets/Logo.jpg'

const { Header } = Layout

class HeaderContent extends Component {
  render () {
    return (
      <Header className="header">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="user">hello welcome</div>
      </Header>
    )
  }
}

export default HeaderContent