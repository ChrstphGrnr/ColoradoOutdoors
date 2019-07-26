import React from 'react';



const CommentShow = (props) => {
        // debugger
        
        return (
            <div>
                <h5>
                    {props.comment.content}
                </h5>
                <h6>    
                    by: {props.comment.name} 
                </h6>
                <br/>
            </div>
        );
}


export default CommentShow;
