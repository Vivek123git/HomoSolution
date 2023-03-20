import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Serviceworker.css";
import Navbar from '../Navbar/Navbar'

function ServiceWorker() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    state: "",
    city: "",
    category: "",
    description: "",
    near:"",
    pin:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
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
                //   onChange={handleSelectBox2Change}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
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
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Upload Your Aadhar Card (pdf)</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    // onChange={handlePdfUpload}
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
              <Button variant="primary" type="submit">
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
