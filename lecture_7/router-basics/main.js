import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import commentsApp from './reducers'
import { websocketConnectionRequested, sendWebsocketMessage } from './actions/Websocket';
import Routes from './Routes'

let store = createStore(
  commentsApp,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('content')
);

let previousComments;
const unsubscribe = store.subscribe( () => {
  const newComments = store.getState().form.comments

  if (previousComments !== newComments) {
    sendWebsocketMessage(store.getState().form.comments)
  }

  previousComments = newComments
})

// Immediately connected to websocket, this could also be done only when e.g a button is pushed
store.dispatch(websocketConnectionRequested())
