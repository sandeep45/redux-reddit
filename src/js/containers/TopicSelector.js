import { connect } from 'react-redux'

import TopicDropDown from "../components/TopicDropDown.js"
import { selectTopic } from "../actions/"

const mapStateToProps = (state, ownProps) => {
  return {
    topics : ["startup", "technology", "food", "react", "redux", "flux"],
    currentTopic : state.selectedTopic
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: (topic) => {
      dispatch(selectTopic(topic))
    }
  }
};

const TopicSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicDropDown);

export default TopicSelector;

