import K from "../constants/"


// this has a json with keys being the topic and the value being a json which has data
const postsByTopic = (state={}, action) => {

  switch(action.type){

    case K.RECEIVED_POSTS:
    case K.REQUESTED_POSTS:
      return {
        ...state,
       [action.payload.topic]:  posts(state[action.payload.topic], action)
      }
    default:
      return state
  }

}

// this is a json which holds posts of a topic
const defaultPostState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}
const posts = (state=defaultPostState, action) => {

  switch(action.type){
    case K.RECEIVED_POSTS:
      return {
        isFetching: false,
        didInvalidate: false,
        items: action.payload.items
      }
    case K.REQUESTED_POSTS:
      return {
        ...state,
        isFetching: true
      }
  }
}

export default postsByTopic

