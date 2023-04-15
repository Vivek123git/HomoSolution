import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Rating from "react-rating-stars-component";
import Navbar from "./Navbar/Navbar";

const UserProfile = () => {
  const [rating, setRating] = useState({
    name: "",
    text: "",
    rate: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <section className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile_heading text-center">
                <h3>User Profile</h3>
              </div>
              <Row style={{ padding: "20px", alignContent: "center" }}>
                <Col
                  xs={12}
                  md={8}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5>Name : John Doe</h5>
                  <p>Mobile No.: 1234567890</p>
                </Col>
                <Col
                  xs={12}
                  md={4}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Image
                    style={{ maxWidth: "200px" }}
                    src="https://img.freepik.com/free-vector/repair-elements-round-template_1284-37691.jpg?w=740&t=st=1680349046~exp=1680349646~hmac=01f506fa402adb9a53b74df1f76fa944ac021ca14fcf1875cc7ead5d08f6cb62"
                    roundedCircle
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Booking Status</h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>ServiceWorker Name</th>
                        <th>ServiceWorker Mobile No.</th>
                        <th>Services</th>
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
                        <td>Elctrician</td>
                        <td>2023-04-02</td>
                        <td>Pending</td>
                        <td>
                          <button onClick={handleShow}>Rating</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Service 2</td>
                        <td>123456789</td>
                        <td>Plumber</td>
                        <td>2023-04-03</td>
                        <td>Completed</td>
                        <td>******</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Service 3</td>
                        <td>123456789</td>
                        <td>Elctrician</td>
                        <td>2023-04-04</td>
                        <td>Cancelled</td>
                        <td>******</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <h1>Rate this</h1>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={rating.name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={rating.text}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <br />
                        <Rating
                          count={5}
                          size={24}
                          activeColor="#ffd700"
                          value={rating.rate}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
