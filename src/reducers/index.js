import addAnimalsReducer from './addAnimals';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  animals: addAnimalsReducer,
})

export default rootReducer;