import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const AttractionCard = (props) => {
        const attraction = props.attraction
        const id = props.id
       
        return (
            
            <div>

            <Card id={id} className="bg-dark text-white" style={{ width: '56rem'}}>
              <Card.Img variant="top" src={attraction.images[1]} />
              <Card.Body>
                <Card.Title >{attraction.name}</Card.Title>
                <Card.Text >
                {attraction.description}
                </Card.Text>
                <Link to={{pathname:`/attractions/${attraction.name}`,
                                  state: {attraction: attraction}} }>                    
                <Button variant="primary">See this Attraction</Button>
                </Link>
              </Card.Body>
            </Card>
            <br/>
            <br/>

            </div>
           
        );
    }


export default AttractionCard;

