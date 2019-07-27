import React from 'react';
import Card from 'react-bootstrap/Card'
import CommentContainer from '../../containers/CommentContainer'

const AttractionShow = (props) => {
        // debugger
        const attraction = props.location.state.attraction
        return (
            <div>
            {console.log(props.location.state)}
                <Card id={attraction.id} className="bg-dark text-white" style={{ width: '56rem'}}>

                    {attraction.images.map(image => <Card.Img variant="top" src={image} /> )}
                   
                    <br/>
                   
                    <Card.Body>
                        <Card.Title >{attraction.name}</Card.Title>
                        <Card.Text >
                        {attraction.description}

                        </Card.Text>
                        <br/>
                        <br/>
                        <CommentContainer attractionId={attraction.id} />
                            
                            {/* <ul>
                              {attraction.comments.map(comment=> <CommentShow key={comment.id} comment={comment} /> )}
                            </ul>
                        <CommentForm attractionId={attraction.id} /> */}
                    </Card.Body>
                </Card>
            </div>
        );
}


export default AttractionShow;
