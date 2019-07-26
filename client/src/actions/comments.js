export const addComment = (comment) => {
    const { name, content } = comment 
        return (dispatch) => {
            return fetch('http://localhost:3001/comments', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                    Accept: 'application/json'
                }, 
                body: JSON.stringify({
                    name, 
                    content
                })
                .then(resp => resp.json())
                .then(comment => dispatch({type: "ADD_COMMENT", comment}))
                .catch(error => console.log(error))
            })
        
    } 
}


 // action creator
export const setSearch = (searchTerm) =>{
    return{
        type:"SET_SEARCH", search:searchTerm
    }
} 