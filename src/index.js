import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { counterMiddleware, duplicateActionsMiddleware, avoidOddActionMiddleware } from './middlewares';

const store = createStore(
  reducer,
  {},
  applyMiddleware(
    thunk,
    counterMiddleware,
    duplicateActionsMiddleware,
    avoidOddActionMiddleware
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
