import { combineReducers } from "redux";
import { ACTION_TYPES } from "./actions";

const initialState = {
  url: '',
  error: ''
};

const catState = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.FETCH_DATA_REQUEST:
      return state;
    case ACTION_TYPES.FETCH_DATA_SUCCESS:
      return {
        url: action.payload,
        error: ''
      };
    case ACTION_TYPES.FETCH_DATA_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default combineReducers({
  catState
});