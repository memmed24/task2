import { FETCH_USERS } from "../actions/types";

const initState = {
  users: [],
  isLoading: true
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload, isLoading: false };
    default:
      return state;
  }
};
