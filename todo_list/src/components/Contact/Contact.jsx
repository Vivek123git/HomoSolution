import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

function ContactUs() {
  return (
    <section className="contact-section">
      <Container style={{backgroundColor:""}}>
        <h2>Book your ServiceMan</h2>
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone no" />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group>

              <Form.Group controlId="formService">
                <Form.Label>Service</Form.Label>
                <Form.Control as="select">
                  <option>Electrician</option>
                  <option>Plumbing</option>
                  <option>AC Technician</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>
                123 Main St<br />
                Anytown, USA<br />
                Phone: (123) 456-7890<br />
                Email: info@yourcompany.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
