import { combineReducers } from 'redux'
import selectedTopic from './selectedTopic.js'

const myReducer = combineReducers({
  selectedTopic: selectedTopic
});

export default myReducer;
