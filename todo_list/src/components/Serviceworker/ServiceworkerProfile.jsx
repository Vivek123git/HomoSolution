import React from "react";
import { Container, Row, Col, Image, Form, Button, Table } from "react-bootstrap";
import Navbar from "../Navbar/Navbar"

const ServiceWorkerProfile = () => {
  return (
   <section>
    <Navbar/>
    <Container className='backColor'>
      
      <Row style={{padding:"20px"}}>
        <Col xs={12} md={4} >
          <Image style={{maxWidth:"200px"}} src="https://img.freepik.com/free-vector/repair-elements-round-template_1284-37691.jpg?w=740&t=st=1680349046~exp=1680349646~hmac=01f506fa402adb9a53b74df1f76fa944ac021ca14fcf1875cc7ead5d08f6cb62" roundedCircle />
        </Col>
        <Col xs={12} md={8}>
          <h1>John Doe</h1>
          <p>Mobile No.: 1234567890</p>
          <p>Address: 123 Main Street, Anytown USA</p>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Service</Form.Label>
              <Form.Control as="select">
                <option>Service 1</option>
                <option>Service 2</option>
                <option>Service 3</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Book Service
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Booking Status</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer Name</th>
                <th>Customer Mobile No.</th>
                <th>Customer Address</th>
                <th>Date</th>
                <th>Status</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Service 1</td>
                <td>123456789</td>
                <td>xyz, Lucknow , Chinhat tiraha , near petrol pump pin code -123456</td>
                <td>2023-04-02</td>
                <td>Pending</td>
                <td>******</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Service 2</td>
                <td>123456789</td>
                <td>xyz, Lucknow , Chinhat tiraha , near petrol pump pin code -123456</td>
                <td>2023-04-03</td>
                <td>Completed</td>
                <td>******</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Service 3</td>
                <td>123456789</td>
                <td>xyz, Lucknow , Chinhat tiraha , near petrol pump pin code -123456</td>
                <td>2023-04-04</td>
                <td>Cancelled</td>
                <td>******</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
   </section>
  );
};

export default ServiceWorkerProfile;
