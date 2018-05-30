import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

// const { SubMenu } = Menu

class MenuContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedK: window.sessionStorage.getItem('selectedK') || 'home'
    }
  }

  componentDidMount () {
    let pathname = this.props.location.pathname
    console.log(pathname)
    if (pathname === '/') {
      this.setState(() => {
        selectedK: 'home'
      })
    } else {
      this.setState(() => {
        selectedK: 'test'
      })
    }
  }


  menuItemChange = ({item, key, keyPath}) => {
    window.sessionStorage.setItem('selectedK', key)
  }

  render () {
    console.log(this.state.selectedK)
    let defaultSelectedKeys = [this.state.selectedK]
    return (
      <div className="menu-box">
        <div className="main-title">
          <Icon type="home"/>
          <span>Ikang Saas</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          style={{ height: '100%', borderRight: 0 }}
          theme="light"
          onClick={this.menuItemChange}
        >
          <Menu.Item key="home">
            <Link to="/"/>
            <Icon type="user"/>
            <span>home</span>
          </Menu.Item>
          <Menu.Item key="test">
            <Link to="/test"/>
            <Icon type="team"/>
            <span>test</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(MenuContent)