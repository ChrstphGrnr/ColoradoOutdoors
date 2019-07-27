// import attractions from "../reducers/attractions";

// async action
export const fetchAttractions = () => {
    return (dispatch) => {
        dispatch({ type: 'COMMENCE_ATTRACTION_FETCH' })
        return fetch("http://localhost:3001/api/v1/attractions")
        .then(resp => resp.json())
        .then(attractions =>dispatch({type:"SET_ATTRACTIONS", attractions} ))
        .then(x => console.log('fetch complete'))

       };
}
