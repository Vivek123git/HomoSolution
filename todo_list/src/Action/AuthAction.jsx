import { commonAxios } from "../components/CommonAxios";



export const createAccount = (data, navigate) => (dispatch, getState) => {
  localStorage.clear();
  commonAxios("ragister", data, dispatch)
    .then((res) => {
      const data = res.data;
      console.log(res.data,"hello")
      if (res.status) {
        navigate("/home");
        // localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
      } else {
        dispatch({ type: "LOGIN_FAILURE", error: data.error });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE", error: error.message });
    });
};


  