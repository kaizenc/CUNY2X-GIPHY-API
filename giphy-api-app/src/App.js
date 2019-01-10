import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        let gifs = this.state.data.map(x => {
            return <GifCard key={x.id} title={x.title} imageUrl={x.images.fixed_width.url}/>;
        });
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
