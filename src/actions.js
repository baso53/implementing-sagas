export const ACTION_TYPES = {
  "FETCH_DATA_REQUEST": "FETCH_DATA_REQUEST",
  "FETCH_DATA_SUCCESS": "FETCH_DATA_SUCCESS",
  "FETCH_DATA_FAILED": "FETCH_DATA_FAILED"
};

export const fetchDataRequest = payload => ({ type: "FETCH_DATA_REQUEST", payload: payload });