import React, { Component } from 'react';
import AttractionCard from '../components/Attractions/AttractionCard'
import { fetchAttractions } from '../actions/attractions'
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AttractionIndex extends Component {

    componentDidMount() {
        this.props.fetchAttractions();
    }



    render() {
        console.log(this.props)

        // const halfAttractions = this.props.attractions.length/2
        // debugger
            return (
                <div >
                    <Row>
                        <Col>
                        {this.props.attractions.map(attraction => <AttractionCard id={attraction.id} attraction={attraction} />)}   
                        </Col>
                    </Row>
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
