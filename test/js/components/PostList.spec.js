import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import PostList from '../../../src/js/components/PostList'

function setup() {
  let props = {
    titles: ["food", "technology", "mood"]
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<PostList {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe("PostList Component", () => {

  it("should render a div with a ul with li's for each title passed in", () => {
    const {props, output} = setup();
    expect(output.type).toEqual("div");
    expect(output.props.children.type).toEqual("ul");

    const theLis = output.props.children.props.children
    expect(theLis).toBeA(Array)
    expect(theLis.length).toEqual(props.titles.length)

    const firstLi = theLis[0];
    expect(firstLi.type).toEqual("li");
    expect(firstLi.key).toEqual(props.titles[0]);
    expect(firstLi.props.children).toEqual(props.titles[0]);
  });




});