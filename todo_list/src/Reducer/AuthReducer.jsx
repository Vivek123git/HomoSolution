import produce from "immer";

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return {
          ...state,
          isAuthenticated: false,
          error: null,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          isAuthenticated: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  