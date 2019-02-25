import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import counterReducer from "./counterReducer";

export default combineReducers({
  users: userReducer,
  posts: postReducer,
  counter: counterReducer
});
