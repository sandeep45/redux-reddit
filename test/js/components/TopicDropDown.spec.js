import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import TopicDropDown from '../../../src/js/components/TopicDropDown'

function setup() {
  let props = {
    topics: ["food", "technology", "mood"],
    currentTopic: "food",
    onSelect: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<TopicDropDown {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe("TopicDropDown Component", () => {

  it("should rendre properly", () => {
    const {props, output} = setup();
    expect(output.type).toEqual("select");

    const [option1, option2, option3] = output.props.children;
    expect(option1.type).toEqual("option");
    expect(option1.props.children).toEqual("food");
    expect(option2.props.children).toEqual("technology");
    expect(option3.props.children).toEqual("mood");
  });

  it("should call onSelect when selected value of drop down has changed", () => {
    const {props, output} = setup();
    const [option1, option2, option3] = output.props.children;

    props.onSelect('yoyo');

    expect(props.onSelect).toHaveBeenCalled();
    expect(props.onSelect).toHaveBeenCalledWith('yoyo')
  });




});