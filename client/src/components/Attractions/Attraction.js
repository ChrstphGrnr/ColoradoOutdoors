import React, { Component } from 'react';

class Attraction extends Component {
    render() {
        // console.log(this.props)
        // debugger
        return (
            
            <div>
                <h1>{this.props.attraction.name}</h1>
                <p>{this.props.attraction.description}</p>
                <img src={this.props.attraction.images[0]} />
            </div>
        );
    }
}

export default Attraction;
