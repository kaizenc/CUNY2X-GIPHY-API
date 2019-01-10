import React, { Component } from 'react';
import axios from 'axios';
import GifCard from './GifCard';

class SwitchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
    }

    render() {
        return (
            <div className="SwitchField">
                <GifCard/>
            </div>
        );
    }
}

export default SwitchField;