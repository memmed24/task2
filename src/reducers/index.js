import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import postFormReducer from './postCreateReducer';
import counterReducer from "./counterReducer";

export default combineReducers({
  users: userReducer,
  posts: postReducer,
  postForm: postFormReducer,
  counter: counterReducer
});
