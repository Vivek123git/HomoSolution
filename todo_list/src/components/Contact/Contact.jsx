import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";
import { Navigate, useNavigate } from "react-router";
import { onBookingServiceman } from "../../Action/ServiceAction";
import { useDispatch } from "react-redux";

function ContactUs() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    state: "",
    city: "",
    service:"",
    description: "",
    near:"",
    pin:""
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

  let data=JSON.stringify({
    name:form.name,
    service:form.service,
    mobile:form.mobile,
    description:form.description,
    address:form.address,
    state:form.state,
    city:form.city,
    landmark: form.near,
    pincode:form.pincode
  
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onBookingServiceman(data))
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <section className="contact-section backColor">
      <Container style={{ backgroundColor: "" }}>
        <h2>Book your ServiceMan</h2>
        <Row>
          <Col >
          <h4 >Fill this form we will contact you soon...</h4>
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
                </Form.Group>
              </Row>

              <Form.Group controlId="formService">
                <Form.Label>Service</Form.Label>
                <Form.Control as="select" onChange={handleSelect}>
                <option value="">Select an option</option>
                  <option value={1}>Electrician</option>
                  <option value={2}>Plumbing</option>
                  <option value={3}>AC Technician</option>
                  <option value={4}>RO Services</option>
                  <option value={5}>CCTV Services</option>
                  <option value={6}>BroadBand Services</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>
                  Write a sort Description of your problem
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter a description"
                  name="description"
                  value={form.description}
                   onChange={(e) => handlehange(e)}
                />
              </Form.Group>

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
                <Form.Group as={Col} controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter state"
                    name="state"
                    value={form.state}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    value={form.city}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Near By</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Landmark"
                    name="near"
                    value={form.near}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formMobile">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pin Code"
                    name="pin"
                    value={form.pin}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          {/* <Col md={4}>
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>
                123 Main St
                <br />
                Anytown, USA
                <br />
                Phone: (123) 456-7890
                <br />
                Email: info@yourcompany.com
              </p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
