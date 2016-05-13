// https://www.npmjs.com/package/expect

import expect from 'expect'
import * as actions from '../../../src/js/actions'
import K from "../../../src/js/constants/"

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

