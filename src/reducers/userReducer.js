import { FETCH_USERS, DELETE_USER, USERS_LOADING_START } from "../actions/types";

const initState = {
  users: [],
  isLoading: true
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case DELETE_USER:
      return {
        users: state.users.filter(user => user.id !== action.payload)
      };
    case USERS_LOADING_START:
      return {
        isLoading: action.payload
      }
    default:
      return state;
  }
};
