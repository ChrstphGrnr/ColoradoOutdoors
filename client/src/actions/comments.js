export const addComment = (comment, attractionId) => {
    // debugger    
        const attraction_id = attractionId
        const commentContent = {...comment, attraction_id}

        return (dispatch) => {
            return fetch('http://localhost:3001/api/v1/comments', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                    Accept: 'application/json'
                }, 
                body: JSON.stringify({
                    commentContent
                })
            })
                .then(resp => resp.json())
                .then(comment => dispatch({type: "ADD_COMMENT", comment}))
                .catch(error => console.log(error))
    } 
}


