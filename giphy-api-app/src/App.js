import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import axios from 'axios';
let variables = require('./variables.js');

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            blah: "blah"
        };
    }
    componentDidMount() {
        axios.get('http://api.giphy.com/v1/gifs/trending?api_key=' + variables.API_KEY)
            .then(response => {
                this.setState({
                    data: response.data.data,
                });

            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let gifs = this.state.data.map(x => {
            return <GifCard key={x.id} title={x.title} imageUrl={x.images.fixed_width.url}/>;
        });
        return (
            <div className="App">
            <SearchField/>
            {gifs}

            </div>
        );
    }
}

export default App;
