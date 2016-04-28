import React from 'react';
import TopicSelector from '../containers/TopicSelector.js'
import SelectedPosts from '../containers/SelectedPosts.js'

const App = (props) => {
  return(
    <div className="container">
      <TopicSelector />
      <SelectedPosts />
    </div>
  )
}

export default App
