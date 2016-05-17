import K from "../constants/"

import fetch from 'isomorphic-fetch'
import axios from 'axios'

export const selectTopic = (topic) => {
  return {
    type: K.SELECT_TOPIC,
    payload: topic,
  }
}

export const receivePosts = (topic, items) => {
  return {
    type: K.RECEIVED_POSTS,
    payload: {
      topic,
      items
    }
  }
}

export const requestPosts = (topic) => {
  return {
    type: K.REQUESTED_POSTS,
    payload: {
      topic
    }
  }
}

export const fetchPosts = (topic) => {
  return (dispatch) => {
    dispatch(requestPosts(topic));

    return axios.get(`http://www.reddit.com/r/${topic}.json`).
      then(
        response => {
          const data = response.data.data;
          // console.log(data);
          const posts = data.children.map( post => post.data.title)
          // console.log(posts);
          dispatch(receivePosts(topic, posts))
        },
        response => {
          // console.log("error getting data: , ", response)
          dispatch(receivePosts(topic, []))
        }
      );

  }
}