import expect from 'expect'
import postsByTopic from '../../../src/js/reducers/postsByTopic.js'
import * as actions from '../../../src/js/actions'
import K from "../../../src/js/constants/"


describe("postsByTopic.js", () => {

  it("returns initil state when unknown action is given", () => {
    const newState = postsByTopic(undefined, {});
    expect(newState).toEqual({});
  })

  it("returns new state with the new topic and its posts", () => {
    const newState = postsByTopic({},
      {
        type: K.RECEIVED_POSTS,
        payload: {
          topic: "food",
          items: [1,2,3]
        }
      }
    );
    expect(newState).toEqual({
      food: {
        isFetching: false,
        didInvalidate: false,
        items: [1,2,3]
      }
    });
  });

  it("returns new state with the old topics and posts along with new new topic and posts", () => {
    const newState = postsByTopic({
        startup: {
          isFetching: false,
          didInvalidate: false,
          items: ["x","y","z"]
        }
      },
      {
        type: K.RECEIVED_POSTS,
        payload: {
          topic: "food",
          items: [1,2,3]
        }
      }
    );
    expect(newState).toEqual({
      startup: {
        isFetching: false,
        didInvalidate: false,
        items: ["x","y","z"]
      },
      food: {
        isFetching: false,
        didInvalidate: false,
        items: [1,2,3]
      }
    });
  });

});