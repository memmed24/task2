import { FETCH_USERS, FETCH_POSTS } from "./types";

// used mock json data instead of sending request to endpoints
import users from "../mock/users";
import posts from "../mock/posts";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: users
  };
};

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
};
