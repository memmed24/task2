import {
  HANDLE_POST_BODY_CHANGE,
  HANDLE_POST_TITLE_CHANGE,
  HANDLE_POST_BODY_BLUR,
  HANDLE_POST_TITLE_BLUR,
  HANDLE_POST_SUBMIT,
  POST_CREATE_LOADING_START,
  POST_CREATE_SHOW_MESSAGE,
  POST_CREATE_HIDE_MESSAGE
} from "../actions/types";

const initState = {
  title: {
    isTouched: false,
    isDirty: false,
    isEmpty: true,
    errors: [],
    value: ""
  },
  body: {
    isTouched: false,
    isDirty: false,
    isEmpty: true,
    errors: [],
    value: ""
  },
  isLoading: false,
  isSubmitFormDisabled: true,
  isMessageOpened: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case HANDLE_POST_BODY_CHANGE:
      return {
        ...state,
        body: {
          isDirty: true,
          isEmpty: action.payload.isEmpty,
          errors: action.payload.errors,
          value: action.payload.value
        }
      };
    case HANDLE_POST_TITLE_CHANGE:
      return {
        ...state,
        title: {
          isDirty: true,
          isEmpty: action.payload.isEmpty,
          errors: action.payload.errors,
          value: action.payload.value
        }
      };
    case HANDLE_POST_BODY_BLUR:
      return {
        ...state,
        body: { ...state.body, isTouched: true }
      };
    case HANDLE_POST_TITLE_BLUR:
      return {
        ...state,
        title: { ...state.title, isTouched: true }
      };
    case HANDLE_POST_SUBMIT:
      return {
        ...state,
        title: { ...state.title, value: "", isDirty: false },
        body: { ...state.body, value: "", isDirty: false },
        isLoading: false
      };
    case POST_CREATE_LOADING_START:
      return {
        ...state,
        isLoading: true
      };
    case POST_CREATE_SHOW_MESSAGE:
      return {
        ...state,
        isMessageOpened: true
      };
    case POST_CREATE_HIDE_MESSAGE:
      return {
        ...state,
        isMessageOpened: false
      };
    default:
      return state;
  }
};
