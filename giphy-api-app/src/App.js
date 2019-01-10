import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Header">
                    <h1>GIPHY 3.0</h1>
                    <SearchField/>
                </div>
            </div>
        );
    }
}

export default App;
