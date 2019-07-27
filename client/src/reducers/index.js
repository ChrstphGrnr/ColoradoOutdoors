import { combineReducers } from 'redux';
import attractions from './attractions';
import search from './search';
// import comment from './comment'

 export default combineReducers({
  attractions,
  search
}); 