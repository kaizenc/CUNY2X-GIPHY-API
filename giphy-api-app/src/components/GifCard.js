import React, { Component } from 'react';
import './GifCard.css';

class GifCard extends Component {
    render() {
        return (
            <div className="GifCard">
                <h4>{this.props.title}</h4>
                <img src={this.props.imageUrl} alt=""></img>
            </div>
        );
    }
}

export default GifCard;
