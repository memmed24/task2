import { FETCH_POSTS } from "../actions/types";

const initState = {
  posts: [],
  isLoading: true
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload, isLoading: false };
    default:
      return state;
  }
};
