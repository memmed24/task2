import {
  FETCH_USERS,
  FETCH_POSTS,
  DELETE_USER,
  USERS_LOADING_START,
  POST_LOADING_START,
  POSTS_LOADING_START,
  HANDLE_POST_TITLE_CHANGE,
  HANDLE_POST_BODY_CHANGE,
  HANDLE_POST_TITLE_BLUR,
  HANDLE_POST_BODY_BLUR,
  POST_CREATE_LOADING_START,
  HANDLE_POST_SUBMIT,
  POST_CREATE_SHOW_MESSAGE,
  POST_CREATE_HIDE_MESSAGE,
  FETCH_POST
} from "./types";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import validator from "validator";
import rules from "../utils";

export const fetchUsers = () => dispatch => {
  dispatch(updateLoadingStatus(true, USERS_LOADING_START));
  jsonPlaceholder.get("users").then(({ data }) => {
    dispatch({
      type: FETCH_USERS,
      payload: data
    });
  });
};

export const fetchPosts = () => dispatch => {
  dispatch(updateLoadingStatus(true, POSTS_LOADING_START));
  jsonPlaceholder.get("posts").then(({ data }) => {
    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  });
};

export const fetchPost = id => async dispatch => {
  dispatch(updateLoadingStatus(true, POST_LOADING_START));
  const { data } = await jsonPlaceholder.get(`posts/${id}`);
  dispatch({
    type: FETCH_POST,
    payload: data
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

/** POST FORMS */
let errors = [];
export const handlePostInputsChange = (name, value) => {
  switch (name) {
    case "title":
      errors = [];
      if (value.length < rules.posts.title.minLength)
        errors.push(
          `Value must contain at least ${
            rules.posts.title.minLength
          } characters`
        );
      return {
        type: HANDLE_POST_TITLE_CHANGE,
        payload: {
          isEmpty: validator.isEmpty(value),
          errors: errors,
          value: value
        }
      };
    case "body":
      errors = [];
      if (value.length < rules.posts.body.minLength)
        errors.push(
          `Value must contain at least ${rules.posts.body.minLength} characters`
        );
      if (!rules.posts.body.acceptEmpty) {
        if (validator.isEmpty(value)) errors.push("Value cannot be empty");
      }
      return {
        type: HANDLE_POST_BODY_CHANGE,
        payload: {
          isEmpty: validator.isEmpty(value),
          errors: errors,
          value: value
        }
      };
    default:
      return;
  }
};

export const handlePostInputsBlur = name => {
  if (name === "title") {
    return {
      type: HANDLE_POST_TITLE_BLUR,
      payload: true
    };
  } else if (name === "body") {
    return {
      type: HANDLE_POST_BODY_BLUR,
      payload: true
    };
  }
};

export const handlePostSubmit = postData => dispatch => {
  dispatch(updateLoadingStatus(true, POST_CREATE_LOADING_START));
  jsonPlaceholder.post("posts", postData).then(({ data }) => {
    dispatch({
      type: HANDLE_POST_SUBMIT
    });
    dispatch(showMessage(POST_CREATE_SHOW_MESSAGE));
  });
};

const showMessage = (type, message) => dispatch => {
  dispatch({
    type: type
  });

  setTimeout(() => {
    dispatch(hideMessage());
  }, 3000);
};

const hideMessage = () => {
  return {
    type: POST_CREATE_HIDE_MESSAGE
  };
};
