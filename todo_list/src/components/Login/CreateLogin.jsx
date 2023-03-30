import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HOMOSOLUTION from '../../img/HOMOSOLUTION.png';
import { useNavigate } from 'react-router';
import {useDispatch } from 'react-redux'
import { createAccount } from '../../Action/AuthAction';
import './Login.css';

const CreateLogin = () => {

  const navigate= useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name:'',
    mobile:"",
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
    password:formData.password,
    name:formData.name,
    mobile:formData.mobile
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password!==formData.cnfPassword){
      setMsg(true)
    }
    else{

      dispatch(createAccount(data,navigate))
    // axios.post("https://onehomesolution.000webhostapp.com/ragister",data,{options})
    // .then((res)=>{
    //     // console.log(res)
        
    //       console.log("first")
    //       navigate("/home")
    //       localStorage.setItem("user",JSON.stringify(res.data))
        
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
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
        <Col xs={8} md={6} style={{color:"Black"}}>
          <h1>Create Account</h1>
          <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formMobile">
              <Form.Label >Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>            

            <Form.Group controlId="formEmail">
              <Form.Label >Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email "
                required
              />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label >Mobile No.</Form.Label>
              <Form.Control
                type="Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile no."
                required
              />
            </Form.Group>            

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="cnfPassword"
                value={formData.cnfPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                required
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
