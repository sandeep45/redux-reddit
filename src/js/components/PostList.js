import React, { PropTypes } from 'react'

const NoData = (props) => <h1>No Data Available</h1>

const PostList = (props) => {
  const { titles } = props;

  const listOfData = <ul>{titles.map( title => <li key={title}>{title}</li>)}</ul>

  return (
    <div>
      {titles.length > 0 ? listOfData : <NoData />}
    </div>
  );
}

PostList.propTypes = {
  titles: PropTypes.array.isRequired
};

export default PostList;