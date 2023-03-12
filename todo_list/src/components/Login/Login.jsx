import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HOMOSOLUTION from '../../img/HOMOSOLUTION.png';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mobile:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const options = {
    headers: {
        'Content-Type': 'application/json',
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:1000/login",formData,options)
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })
  };

  return (
    <Container>
    <Row>
    <Col className="logo">
      <img src={HOMOSOLUTION}/>
      <h3 style={{marginTop:"20px"}}>HOMOSOLUTION.com </h3>   
    </Col>
    </Row>

      <Row className="justify-content-md-center" style={{marginTop:"5%"}}>
        <Col xs={12} md={6} style={{color:"Black"}}>
          <h1>Login Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label >Email/Mobile No.</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email or mobile no."
              />
            </Form.Group>

            {/* <Form.Group controlId="formMobile">
              <Form.Label >Mobile No.</Form.Label>
              <Form.Control
                type="Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter email or mobile no."
              />
            </Form.Group>             */}

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
