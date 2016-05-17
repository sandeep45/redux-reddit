import expect from 'expect'
import selectedTopic from '../../../src/js/reducers/selectedTopic.js'
import * as actions from '../../../src/js/actions'
import K from "../../../src/js/constants/"


describe("selectedTopic.js", () => {

  it("returns initil state when unknown action is given", () => {
    const newState = selectedTopic(undefined, {});
    expect(newState).toEqual("startup");
  })

  it("returns new state with the new topic selected", () => {
    const newState = selectedTopic(null, actions.selectTopic("food"));
    expect(newState).toEqual("food");
  });

});