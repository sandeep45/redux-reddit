import { connect } from 'react-redux'

import PostList from '../components/PostList.js'

const mapStateToProps = (state, ownProps) => {
  return {
    titles: state.postsByTopic[state.selectedTopic].items
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const SelectedPosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default SelectedPosts;
