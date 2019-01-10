import React, { Component } from 'react';
import axios from 'axios';
import GifCard from './GifCard';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
    }

    render() {
        return (
            <div className="SearchField">
                <GifCard/>
            </div>
        );
    }
}

export default SearchField;