import React, { Component } from 'react';
import Attraction from './Attraction'

class AttractionIndex extends Component {


    render() {
        console.log(this.props)
        debugger
            return (
                <div>
                    <ul>
                       {this.props.attractions.map(attraction => <li><Attraction attraction={attraction} /> </li>)}
                    </ul>
                </div>
            );
        }
    }


export default AttractionIndex;
