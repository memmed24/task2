import { FETCH_USERS, FETCH_POSTS, DELETE_USER, USER_LOADING_START, POST_LOADING_START } from "./types";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchUsers = () => dispatch => {
  dispatch(updateLoadingStatus(true, USER_LOADING_START));
  jsonPlaceholder.get("users").then(({ data }) => {
    dispatch({
      type: FETCH_USERS,
      payload: data
    });
  });
};


export const fetchPosts = () => dispatch => {
  dispatch(updateLoadingStatus(true, POST_LOADING_START));
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

const updateLoadingStatus = (status, type) => ({
  type: type,
  payload: status
});

