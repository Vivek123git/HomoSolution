import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

function ContactUs() {
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
                <Form.Control as="select">
                  <option>Electrician</option>
                  <option>Plumbing</option>
                  <option>AC Technician</option>
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
