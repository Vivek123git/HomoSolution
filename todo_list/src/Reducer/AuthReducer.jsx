import produce from "immer";

let auth = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).auth : {
  isAuthenticated: false,
  user: null,
  error: null,
}

const initialState = {
  isAuthenticated: auth && auth.isAuthenticated ? auth.isAuthenticated : false,
  user: auth && auth.user ? auth.user : null,
  error: auth && auth.error ? auth.error : null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return produce(state, (draftState) => {
        draftState.isAuthenticated = false;
        draftState.error = null;
      });
    case "LOGIN_SUCCESS":
      return produce(state, (draftState) => {
        draftState.isAuthenticated = true;
        draftState.user = action.payload;
        draftState.error = null;
      });
    case "LOGIN_FAILURE":
      return produce(state, (draftState) => {
        draftState.isAuthenticated = false;
        draftState.error = action.error;
      });
    default:
      return state;
  }
};

export default AuthReducer;
