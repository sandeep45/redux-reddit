import { combineReducers } from 'redux'
import selectedTopic from './selectedTopic.js'
import postsByTopic from './postsByTopic.js'

const myReducer = combineReducers({
  selectedTopic: selectedTopic,
  postsByTopic: postsByTopic
});

export default myReducer;
