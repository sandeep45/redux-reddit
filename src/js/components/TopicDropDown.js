import React, { PropTypes } from 'react';

const TopicDropDown = (props) => {

  const { topics, onSelect, currentTopic } = props;

  return (
    <select value={currentTopic} onChange={(e) => onSelect(e.currentTarget.value) }>
      {
        topics.map( (topic) => {
          return (<option key={topic} value={topic}>{topic}</option>);
        } )
      }
    </select>
  );
}

TopicDropDown.propTypes = {
  topics: PropTypes.array.isRequired,
  currentTopic: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default TopicDropDown