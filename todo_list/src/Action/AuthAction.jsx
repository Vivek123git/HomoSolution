import axios from "axios";

const options = {
  headers: {
    'Content-Type': 'application/json',
  }
};

export const createAccount = (data, navigate) => (dispatch, getState) => {
  axios.post("https://onehomesolution.000webhostapp.com/ragister", data, {options})
    .then((res) => {
      const data = res.data;
      if (res.status) {
        console.log("first");
        navigate("/home");
        localStorage.setItem("user", JSON.stringify(res.data));
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


  