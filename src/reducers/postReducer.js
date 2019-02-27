import { FETCH_POSTS, POSTS_LOADING_START, FETCH_POST, POST_LOADING_START } from "../actions/types";

const initState = {
  posts: [],
  post: {},
  isPostsLoading: true,
  isPostLoading: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        isPostsLoading: false,
      };
    case POSTS_LOADING_START:
      return {
        ...state,
        isPostsLoading: action.payload
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
        isPostLoading: false
      };
    case POST_LOADING_START:
      return {
        ...state,
        isPostLoading: action.payload
      }
    default:
      return state;
  }
};
