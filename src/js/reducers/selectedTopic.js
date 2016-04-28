import K from '../constants/index.js'

const selectedTopic = (state="startup", action) => {
  switch(action.type){
    case K.SELECT_TOPIC:
      state = action.payload
      return state;
    default:
      return state
  }
  return state;
}

export default selectedTopic