import React, { Component } from 'react';
import { Button } from 'antd';
import './home.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    console.log(e.target.dataset.key)
  }

  render() {
    return (
      <div className="App">
        home
        <Button type="primary" data-key="click" onClick={this.handleClick}>Button</Button>
      </div>
    );
  }
}

export default App;
