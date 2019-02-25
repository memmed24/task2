import { FETCH_USERS, DELETE_USER } from "../actions/types";

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
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};
