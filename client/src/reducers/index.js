import { combineReducers } from 'redux';
import attraction from './attractions';
// import search from './search';
import comment from './comment'

 export default combineReducers({
  attraction,
  // search, 
  comment
}); 