// import attractions from "../reducers/attractions";

// async action

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}



export const fetchAttractions = () => {
    return (dispatch) => {
        dispatch({ type: 'COMMENCE_ATTRACTION_FETCH' })
        return fetch("http://localhost:3001/api/v1/attractions")
        .then(resp => resp.json())
        .then(json => shuffleArray(json))
        .then(attractions =>dispatch({type:"SET_ATTRACTIONS", attractions} ))
       };
}

export const hideAttraction = (id) => {
    // debugger 
        return{
            
            type:"HIDE_ATTRACTION", attractionId: id
        }
    }
