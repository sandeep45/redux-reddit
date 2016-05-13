// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import configureStore from './configureStore'


const initialStoreState = {
  selectedTopic: "food",
  postsByTopic: {
    food: {
      isFetching: false,
      didInvalidate: false,
      items: [
        "Lorem ipsum Occaecat elit aliquip ad adipisicing eu qui ullamco adipisicing Ut mollit occaecat fugiat dolore Duis incididunt.",
        "ipsum Occaecat elit aliquip ad adipisicing eu qui ullamco adipisicing Ut mollit occaecat fugiat dolore Duis incididunt.",
        "Occaecat elit aliquip ad adipisicing eu qui ullamco adipisicing Ut mollit occaecat fugiat dolore Duis incididunt.",
        "elit aliquip ad adipisicing eu qui ullamco adipisicing Ut mollit occaecat fugiat dolore Duis incididunt.",
        "aliquip ad adipisicing eu qui ullamco adipisicing Ut mollit occaecat fugiat dolore Duis incididunt."
      ]
    }
  }
}

const store = configureStore(initialStoreState);
window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

