import React, { Component } from 'react';

class GifCard extends Component {
    render() {
        return (
            <div className="GifCard">
                <h4>{this.props.title}</h4>
                <img src={this.props.imageUrl}></img>                
            </div>
        );
    }
}

export default GifCard;
