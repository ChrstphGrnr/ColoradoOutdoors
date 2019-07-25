export const fetchAttractions = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/attractions")
        .then(resp => resp.json())
        .then(attractions =>dispatch({type:"SET_MON", attractions} ))
        .then(x => console.log('fetch complete'))

       };
}



 // action creator
export const setSearch = (searchTerm) =>{
    return{
        type:"SET_SEARCH", search:searchTerm
    }
} 