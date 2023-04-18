import React from "react";
import { Container, Row, Col, Image, Form, Button, Table } from "react-bootstrap";
import Navbar from "../Navbar/Navbar"

const ServiceWorkerProfile = () => {
  return (
    <>
    <Navbar/>
   <section className="main-section">
   <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile_heading text-center">
                <h3>Serviceworker Profile</h3>
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
                        <td>******</td>
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
              </div>
              </div>
              </div>
   </section>
   </>
  );
};

export default ServiceWorkerProfile;
