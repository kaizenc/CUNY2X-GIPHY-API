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
    loadData(data_){
        this.setState({
            data: data_,
        })
    }
    componentDidMount() {
        console.log(this.state.blah);

        axios.get('http://api.giphy.com/v1/gifs/trending?api_key=' + variables.API_KEY)
            .then(function (response) {
                this.loadData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let gifs = this.state.data.map(x => {
            return <GifCard title={x.title} imageUrl={x.images.fixed_width.url}/>;
        });
        return (
            <div className="App">
            <SearchField/>
            {gifs}
            <GifCard title="Title" imageUrl="https://media2.giphy.com/media/l378AEZceMwWboAQE/200w.gif"/>
            </div>
        );
    }
}

export default App;
