import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HOMOSOLUTION from '../../img/HOMOSOLUTION.png';
import './Login.css';
import '../../../src/App.css'
import { useNavigate } from 'react-router';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const options = {
    headers: {
        'Content-Type': 'application/json',
    }
  };

  let data={
    email:formData.email,
    password:formData.password
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3000/signin",data,options)
    .then((res)=>{
        console.log(res)
        navigate("/home")
    })
    .catch((error)=>{
        console.log(error)
    })
  };

  return (
    <>
    <Row className='justify-content-md-center'>
    <Col className="logo">
      <img src={HOMOSOLUTION}/>
      <h3 >HOMOSOLUTION.com </h3>   
    </Col>
    </Row>
    <Container className='' style={{backgroundColor:"#71a1e9", borderRadius:"20px", padding:"20px" , marginTop:"20px"}}>
    

      <Row className="justify-content-md-center">
        <Col  md={6} style={{color:"Black"}}>
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
    </>
  );
};

export default Login;
