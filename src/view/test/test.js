import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 1
    }
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    );
  }
}

export default Test;
