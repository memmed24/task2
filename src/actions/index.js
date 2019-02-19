import { FETCH_USERS, FETCH_POSTS } from "./types";

export const fetchUsers = users => {
  return {
    type: FETCH_USERS,
    payload: users
  };
};

export const fetchPosts = posts => {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
};
