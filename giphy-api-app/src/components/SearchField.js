import React, { Component } from 'react';
import axios from 'axios';
import GifCard from './GifCard';
let variables = require('../variables');

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "surprised pikachu",
            data: [],
        };
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    handleSearch = () => {
        this.fetchGifData();
        this.setState({ input: "", })
    }

    sanitizeInput = (input) => {
        input = input.toUpperCase();
        let split_input = input.split(" ");
        let output = split_input.join('+');
        return (output);
    }

    fetchGifData() {
        let API_KEY = variables.API_KEY;
        let SEARCH_TERM = this.sanitizeInput(this.state.input);
        let url = "http://api.giphy.com/v1/gifs/search?q=" + SEARCH_TERM + "&api_key=" + API_KEY;
        console.log(url);

        axios.get(url)
            .then(response => {
                var result = response.data.map();
                this.setState({data: result});
            }).catch(err => { console.log(err); });
    }

    render() {
        return (
            <div className="SearchField">
                Search:&nbsp;
                <input type="text" value={this.state.input} onChange={this.handleChange}></input>
                <button onClick={this.handleSearch}>
                    Search
                </button>
                <GifCard/>
            </div>
        );
    }
}

export default SearchField;
