import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HOMOSOLUTION from "../../img/HOMOSOLUTION.png";
import "./Login.css";
import "../../../src/App.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { loginAccount } from "../../Action/AuthAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData,"fihdc")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

 

  let formDataLogin = new FormData();
  formDataLogin.append("email",formData.email)
  formDataLogin.append("password",formData.password)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://onehomesolution.000webhostapp.com/login-user", formDataLogin, {
        options,
      })
      .then((res) => {
        if (res.data.status) {
          console.log(res);
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(loginAccount(formDataLogin,navigate))
  };

  return (
    <>
      <div className="container-fluid main_bg">
        <div className="row">
          <div className="col-md-12">
            <div className="logo">
              <img src={HOMOSOLUTION} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="header p-4">
              <h1 style={{ fontSize: "33px" }}>
                Welcome to Our Home Services Website
              </h1>
            </div>
          </div>

          <div className="container" style={{ paddingBottom: "30px" }}>
            {/* style={{
              backgroundColor: "#71a1e9",
              borderRadius: "20px",
              padding: "20px",
              marginTop: "80px",
            }} */}

            {/* <Row
              className="justify-content-md-center"
              style={{ marginTop: "5%" }}
            > */}

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="create_page ">
                  <h1 style={{ fontSize: "28px" }}>Create Account</h1>
                  <hr style={{ color: "#0062cc" }} />
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      
                      <div className="col-md-12 p-2">
                        <Form.Group
                          controlId="formMobile"
                          className="input_wrap"
                        >
                          <Form.Label>Mobile No./Email</Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter mobile no./email"
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-12 p-2">
                        <Form.Group
                          controlId="formPassword"
                          className="input_wrap"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="pasword"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                          />
                        </Form.Group>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="login_btn">
                          <div className="d-flex justify-content-center align-items-baseline">
                            <p className="mb-0"> If you dont have account</p>
                            <Link to="/create">
                            <Button
                              variant="primary"
                              type="submit"
                              className="ms-2"
                            >
                              Create
                            </Button>
                            </Link>
                          </div>
                          <Button
                            variant="primary"
                            type="submit"
                            style={{
                              width: "36%",
                              height: "60px",
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
