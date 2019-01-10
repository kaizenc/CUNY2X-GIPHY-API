import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';
let variables = require('./variables.js');

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <SearchField/>
        <p>{variables.API_KEY}</p>
      </div>
    );
  }
}

export default App;
