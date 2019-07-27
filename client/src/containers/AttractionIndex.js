import React, { Component } from 'react';
import AttractionCard from '../components/Attractions/AttractionCard'
import { fetchAttractions} from '../actions/attractions'
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AttractionIndex extends Component {

    componentDidMount() {
        this.props.fetchAttractions();
    }

    render() {
        const attractions = this.props.attractions.filter(attraction => attraction.name.includes(this.props.searchTerm))
            return (
                <div >
                    <Row>
                        <Col>
                        {attractions.map(attraction => <AttractionCard key={attraction.id} id={attraction.id} attraction={attraction} />)}   
                        </Col>
                    </Row>
                </div>
            );
        }
    }
    const mapStateToProps = state =>{
        return {
        
          attractions: state.attractions,
          searchTerm: state.search
        }
      }
    const mapDispatchToProps = dispatch =>{
     return{
       fetchAttractions: () => dispatch(fetchAttractions()),
     //   setSearch: (searchTerm) => dispatch(setSearch(searchTerm))
     }
    
    }


export default connect(mapStateToProps, mapDispatchToProps)(AttractionIndex);
