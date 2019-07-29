import React from 'react';
import Card from 'react-bootstrap/Card'
import CommentContainer from '../../containers/CommentContainer'
import Navigation from '../Navbar'

const AttractionShow = (props) => {
        const attraction = props.location.state.attraction
        return (
            <div>
            <Navigation sticky="top"/>
            {console.log(props.location.state)}
                <Card id={attraction.id} className="bg-dark text-white" style={{ width: '56rem'}}>

                    {attraction.images.map(image => <Card.Img variant="top" src={image} /> )}
                   
                    <br/>
                   
                    <Card.Body>
                        <Card.Title ><h1>{attraction.name}</h1></Card.Title>
                        <Card.Text >
                        {attraction.description}

                        </Card.Text>
                        <br/>
                        <br/>
                        <CommentContainer attractionId={attraction.id} />  
                    </Card.Body>
                </Card>
            </div>
        );
}


export default AttractionShow;
