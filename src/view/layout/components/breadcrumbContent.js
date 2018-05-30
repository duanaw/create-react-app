import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

class BreadcrumbContent extends Component {
  render () {
    return (
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default BreadcrumbContent