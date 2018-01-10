import axios from "axios";

//action types
const RETRIEVE_USER = "RETRIEVE_USER";
const UPDATE_USERNAME = "UPDATE_USERNAME";

//action creators

export function retrieveUser() {
  return {
    type: RETRIEVE_USER,
    payload: axios
      .get("/api/me")
      .then(response => response.data)
      .catch(console.log)
  };
}

export function updateUsername(username, id) {
  return {
    type: UPDATE_USERNAME,
    payload: axios
      .get("/api/me")
      .then(response => response.data)
      .catch(console.log)
  };
}

//reducer functions

const initialState = {
  user: {},
  isLoading: false,
  didError: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${RETRIEVE_USER}_PENDING`:
      return Object.assign({}, state, { ISlOADING: true });

    case `${RETRIEVE_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });

    case `${RETRIEVE_USER}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    case `${UPDATE_USERNAME}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}
