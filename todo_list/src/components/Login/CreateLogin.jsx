import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HOMOSOLUTION from '../../img/HOMOSOLUTION.png';
import { useNavigate } from 'react-router';
import './Login.css';

const CreateLogin = () => {

  const navigate= useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cnfPassword:"",
  });
  const [msg,setMsg] = useState(false)
console.log(formData.cnfPassword)

  const handleChange = (e) => {
    setMsg(false)
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

  let data=JSON.stringify({
    email:formData.email,
    password:formData.password
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password!==formData.cnfPassword){
      setMsg(true)
    }
    else{
    axios.post("http://localhost:3000/register",data,options)
    .then((res)=>{
        // console.log(res)
        
          console.log("first")
          navigate("/home")
          localStorage.setItem("user",JSON.stringify(res.data))
        
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  };

  return (
    <>
    <Row>
    <Col className="logo">
      <img src={HOMOSOLUTION}/>
      <div className="header">
        <h1>Welcome to Our Home Services Website</h1>
        </div>  
    </Col>
    </Row>
    <Container style={{backgroundColor:"#71a1e9", borderRadius:"20px", padding:"20px" , marginTop:"80px"}}>
    

      <Row className="justify-content-md-center" style={{marginTop:"5%"}}>
        <Col xs={12} md={6} style={{color:"Black"}}>
          <h1>Create Account</h1>
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

            <Form.Group controlId="formPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="cnfPassword"
                value={formData.cnfPassword}
                onChange={handleChange}
                placeholder="Enter password"
              />
              {msg?<h3>Password Not matched</h3>:""}
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

export default CreateLogin;
