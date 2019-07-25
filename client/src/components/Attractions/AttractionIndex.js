import React, { Component } from 'react';
import Attraction from './Attraction'
import { fetchAttractions } from '../../actions/attractions'
import { connect } from 'react-redux';

class AttractionIndex extends Component {

    componentDidMount() {
        this.props.fetchAttractions();
    }

    render() {
        console.log(this.props)
        // debugger
            return (
                <div>
                    <ul>
                       {this.props.attractions.map(attraction => <li><Attraction attraction={attraction} /> </li>)}
                    </ul>
                </div>
            );
        }
    }

    const mapStateToProps = state =>{
        return {
          attractions: state.attraction,
        //   searchTerm:state.search
        }
      }
      
       const mapDispatchToProps = dispatch =>{
        return{
          fetchAttractions: () => dispatch(fetchAttractions()),
        //   setSearch: (searchTerm) => dispatch(setSearch(searchTerm))
        }
      
       }


export default connect(mapStateToProps, mapDispatchToProps)(AttractionIndex);
