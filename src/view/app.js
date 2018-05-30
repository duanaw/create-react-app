import React, { Component } from 'react';
import Layout from './layout/layout'
// import {Switch, Route, Link} from 'react-router-dom'
import './app.css'
// import Home from "./home/home";
// import Test from "./test/test";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout></Layout>
      </div>
    );
  }
}

export default App
