import { FETCH_POSTS, POST_LOADING_START } from "../actions/types";

const initState = {
  posts: [],
  isLoading: true
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false
      };
    case POST_LOADING_START:
      return {
        isLoading: action.payload
      }
    default:
      return state;
  }
};
