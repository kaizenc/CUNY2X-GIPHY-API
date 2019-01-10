import React, { Component } from 'react';
import './App.css';
import SwitchField from './components/SwitchField';
let variables = require('./variables.js')

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwitchField/>
      </div>
    );
  }
}

export default App;
