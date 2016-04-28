import K from "../constants/"

export const selectTopic = (topic) => {
  console.log(topic);
  return {
    type: K.SELECT_TOPIC,
    payload: topic,
  }
}
