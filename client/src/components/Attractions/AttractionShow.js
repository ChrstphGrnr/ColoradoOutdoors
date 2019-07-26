import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CommentShow from '../Comments/CommentShow'


const AttractionShow = (props) => {
        // debugger
        const attraction = props.location.state.attraction
        return (
            <div>
            {console.log(props.location.state)}
                <Card id={attraction.id} className="bg-dark text-white" style={{ width: '56rem'}}>
                    <Card.Img variant="top" src={attraction.images[1]} />
                    <br/>
                    <Card.Img variant="top" src={attraction.images[0]} />
                    <Card.Body>
                        <Card.Title >{attraction.name}</Card.Title>
                        <Card.Text >
                        {attraction.description}

                        </Card.Text>
                        <br/>
                        <br/>
                            <ul>
                              {attraction.comments.map(comment => <CommentShow comment={comment} /> )}
                            </ul>
                        <Button>
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        );
}


export default AttractionShow;
