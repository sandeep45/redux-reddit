// https://www.npmjs.com/package/expect

import expect from 'expect'
import * as actions from '../../../src/js/actions'
import K from "../../../src/js/constants/"

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialStoreData = {
  selectedTopic: "startup",
  postsByTopic: {}
};

var store;

describe("fetchPosts", () => {

  beforeEach(() => {
    store = mockStore(initialStoreData);
  });

  it("disptches 'requestPosts' upon being called", () => {
    const topic = "topic";

    const expected_requestPosts = actions.requestPosts(topic);

    store.dispatch(actions.fetchPosts(topic));

    console.log(store.getActions())
    expect(store.getActions()).toInclude(expected_requestPosts)
  });

  it("dispatches 'receivePosts' after its ajax promise resolves", () => {
    const topic = "technology";

    const expectedActionObj = actions.receivePosts(topic, []);

    nock('http://www.reddit.com:80', {"encodedQueryParams":true})
    .get(`/.*r/${topic}.json`)
    .reply(200, { data: { children: [] } })

    return store.dispatch(actions.fetchPosts(topic)).
      then(() => {
        console.log(store.getActions());
        expect(store.getActions()[1]).toMatch(expectedActionObj);
      });
  })
});


describe("selectTopic", () => {
  it("returns an object", () => {
    const actionObj = actions.selectTopic("yo");
    expect(actionObj).toBeA('object');
  });

  it("returns a json with type and payload", () => {
    const actionObj = actions.selectTopic("yo");
    expect(actionObj).toIncludeKeys(["type", "payload"]);
  });

  it("returns a json with type set and payload set", () => {
    const actionObj = actions.selectTopic("yo");
    const expectObj = {type: K.SELECT_TOPIC, payload: "yo"}
    expect(actionObj).toInclude(expectObj);
  });

  it("creates the josn for selectTopic action", () => {
    const topic = "Water";
    const expectedActionObj = {
      type: K.SELECT_TOPIC,
      payload: topic
    }
    expect(actions.selectTopic(topic)).toEqual(expectedActionObj);
  });
});



