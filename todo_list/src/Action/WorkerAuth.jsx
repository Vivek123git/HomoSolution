import { commonAxios } from "../components/CommonAxios";
import { onSetAlert } from "./AlertAction";



export const logOutWorker=()=>(dispatch, getState)=>{
    dispatch({type:"LOG_OUT_WORKER"})
}

export const loginWorkerAccount = (formData, navigate) => (dispatch, getState) => {
  commonAxios("login-worker", formData, dispatch)
    .then((res) => {
      const data = res.data;
      if (res.status) {
        navigate("/serviceworkerProfile");
        dispatch({ type: "LOGIN_SUCCESS_WORKER", payload: data });
        dispatch(onSetAlert("success",res.msg))
      } else {
        dispatch({ type: "LOGIN_FAILURE_WORKER", error: data.error });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE_WORKER", error: error.message });
    });
};


  