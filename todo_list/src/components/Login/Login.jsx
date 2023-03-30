import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HOMOSOLUTION from '../../img/HOMOSOLUTION.png';
import './Login.css';
import '../../../src/App.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


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
      <div className="header">
        <h1>Welcome to Our Home Services Website</h1>
        </div>   
    </Col>
    </Row>
    <Container className='' style={{backgroundColor:"#71a1e9", borderRadius:"20px", padding:"20px" , marginTop:"100px"}}>
    

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

            <Row className=''> 
           <Col md={4}>
           <Button variant="primary" type="submit">
              Login
            </Button>
           </Col>
            <Col className='d-flex'>
            <p style={{marginTop:"15px"}}>If you dont have account ? </p>
            <Link to="/create"><Button variant="primary" type="submit">
              Create
            </Button></Link>
            </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
    {/* <video autoPlay muted className='video' src={HomeService}></video> */}
    </>
  );
};

export default Login;
