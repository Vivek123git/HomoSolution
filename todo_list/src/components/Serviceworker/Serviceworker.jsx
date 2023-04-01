import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Serviceworker.css";
import Navbar from '../Navbar/Navbar'
import { useDispatch } from "react-redux";
import { onCreateServiceman } from "../../Action/ServiceAction";
import { useNavigate } from "react-router";

function ServiceWorker() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    service: "",
    skills:"",
    img:'',
    aadhar:"",
    password:"",
    
  });

  const handleSelect=(e)=>{
    const {value} = e.target;
    if(value==="1"){
     setForm({
      ...form,
      service:"Electrician"
     })
    }else if(value==="2"){
      setForm({
        ...form,
        service:"Plumbering"
       })
    }else if(value==="3"){
      setForm({
        ...form,
        service:"AC Services"
       })
    }else if(value==="4"){
      setForm({
        ...form,
        service:"RO Services"
       })
    }else if(value==="5"){
      setForm({
        ...form,
        service:"CCTV Services"
       })
    }else if(value==="6"){
      setForm({
        ...form,
        service:"BroadBand Services"
       })
    }
  }

  const data = {
    name:form.name,
    service:form.service,
    skills:form.skills,
    mobile:form.mobile,
    description:form.description,
    address:form.address,
    password:form.password,
   img:form.img,
   aadhar:form.aadhar,
   password:form.password
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onCreateServiceman(data))
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate=()=>{
    navigate("/serviceworkerprofile")
  }

  return (
    <>
    
    <section className="contact-section ">
    <Navbar/>
      <Container style={{ backgroundColor: "" }}className="backColor">
        
        <h2>Create Your account as ServiceWorker</h2>
        <Row>
          <Col >
          <h4 >Fill this form we will contact you soon for Verification...</h4>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={form.name}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formMobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter mobile number"
                    name="mobile"
                    value={form.mobile}
                    onChange={(e) => handlehange(e)}
                  />
                  <Button variant="primary" type="submit" style={{float:"right"}}>
                OTP send
              </Button>
                </Form.Group>
                
              </Row>

              <Row>
              <Form.Group as={Col}>
                <Form.Label>Choose Your Service</Form.Label>
                <Form.Control
                  as="select"
                //   value={selectBox2}
                  onChange={handleSelect}
                  required
                >
                  <option value="">Select an option</option>
                  <option value={1}>Electrician</option>
                  <option value={2}>Plumbing</option>
                  <option value={3}>AC Technician</option>
                  <option value={4}>RO Services</option>
                  <option value={5}>CCTV Services</option>
                  <option value={6}>BroadBand Services</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Choose Your Skills</Form.Label>
                <Form.Control
                  as="select"
                //   value={selectBox2}
                //   onChange={handleSelectBox2Change}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </Form.Control>
              </Form.Group>
              </Row>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  value={form.address}
                  onChange={(e) => handlehange(e)}
                />
              </Form.Group>

              <Row>
              <Form.Group as={Col}>
                  <Form.Label>Upload Your Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    // onChange={handleImageUpload}
                    value={form.img}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Upload Your Aadhar Card (pdf)</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".pdf/jpg"
                    // onChange={handlePdfUpload}
                    value={form.aadhar}
                  />
                </Form.Group>
              </Row>

              <Row>
              <Form.Group as={Col}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    // value={password}
                    // onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    // value={password}
                    // onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>
              </Row>

              <Row>
              <Button variant="primary" type="submit" onClick={handleCreate}>
                Create Account
              </Button>
             
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default ServiceWorker;
