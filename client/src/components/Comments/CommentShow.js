import React from 'react';
import Button from 'react-bootstrap/Button'


const CommentShow = (props) => {  
        return (
            <div>
                
                <br/>
                <h5>
                    {props.comment.content}
                </h5>
                <h6>    
                    by: {props.comment.name} 
                </h6>
                <br/>
                <br/>
                -------------------------------
            </div>
        );
}

export default CommentShow;
