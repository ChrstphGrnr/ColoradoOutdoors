export default (state = "", action) => {
    switch(action.type){

    // {type: "SET_SEARCH", search:"whatever user has typed in"}
    case "SET_SEARCH":
        return action.search
        
    default:
        return state;
    }
}
