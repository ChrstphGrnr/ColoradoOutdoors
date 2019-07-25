export default (state = [], action) => {
    switch(action.type){

     case "COMMENCE_ATTRACTION_FETCH":
        console.log("we are about to send fetch request")
        return state
    case "SET_MON":
        return action.attractions
        
     default:
        return state;
    }
  }
