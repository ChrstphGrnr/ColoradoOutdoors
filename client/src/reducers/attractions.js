export default (state = [], action) => {
    switch(action.type){

     case "COMMENCE_ATTRACTION_FETCH":
        console.log("we are about to send fetch request")
        return state
    case "SET_ATTRACTIONS":
        return action.attractions
    case "ADD_COMMENT":
        console.log(action.comment)
        // debugger
        const attractions = [...state] 
        attractions.forEach( attraction => {
            if (attraction.id === action.comment.attraction_id) {
            return attraction.comments.push(action.comment) 
            }
        }
        )
        // debugger
        // return {...state, attractions: attractions}
        return attractions
        
     default:
        return state;
    }
  }
