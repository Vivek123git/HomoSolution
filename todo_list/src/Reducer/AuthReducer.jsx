import produce from "immer";

let auth = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).auth : {
  isAuthenticated: false,
  user: null,
  error: null,
  worker:null,
  isAuthenticateWorker:false
}

const initialState = {
  isAuthenticated: auth && auth.isAuthenticated ? auth.isAuthenticated : false,
  user: auth && auth.user ? auth.user : null,
  error: auth && auth.error ? auth.error : null,
  isAuthenticated: auth && auth.isAuthenticateWorker ? auth.isAuthenticateWorker : false,
  worker: auth && auth.worker ? auth.worker : null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return produce(state, (draftState) => {
        draftState.isAuthenticated = true;
        draftState.user = action.payload;
        draftState.error = null;
      });
    case "LOGIN_SUCCESS_WORKER":
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
    case "LOGIN_FAILURE_WORKER":
        return produce(state, (draftState) => {
          draftState.isAuthenticateWorker = false;
          draftState.error = action.error;
        });  

    case "LOG_OUT_USER":
      return produce(state,(draftState)=>{
        draftState.isAuthenticated = false;
        draftState.user = false;
      })  
    case "LOG_OUT_WORKER":
        return produce(state,(draftState)=>{
          draftState.isAuthenticateWorker = false;
          draftState.worker = false;
        })   
    default:
      return state;
  }
};

export default AuthReducer;
