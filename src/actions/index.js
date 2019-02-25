import { FETCH_USERS, FETCH_POSTS, DELETE_USER } from "./types";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchUsers = () => dispatch => {
  jsonPlaceholder.get("users").then(({ data }) => {
    dispatch({
      type: FETCH_USERS,
      payload: data
    });
  });
};

export const fetchPosts = () => dispatch => {
  jsonPlaceholder.get("posts").then(({ data }) => {
    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  });
};

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id
});
