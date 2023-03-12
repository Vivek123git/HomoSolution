import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Customer.css';

function Services() {
  return (
    <Container className="services-container">
        <h3 style={{display:"flex",justifyContent:"center",marginBottom:"35px"}}> We give Awesome Service <span style={{color:"blue"}}> See how customer love us</span> </h3>
      <Row>
        <Col xs={12} lg={6} className="service-col">
          <div className="service-img-wrapper">
            <img src="https://via.placeholder.com/500x300.png" alt="Service 1" className="service-img" />
          </div>
          <div className="service-details">
            <h3>Customer 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at massa sapien.</p>
            <Button variant="primary">Rating</Button>
          </div>
        </Col>
        <Col xs={12} lg={6} className="service-col">
          <div className="service-img-wrapper">
            <img src="https://via.placeholder.com/500x300.png" alt="Service 2" className="service-img" />
          </div>
          <div className="service-details">
            <h3>Customer 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at massa sapien.</p>
            <Button variant="primary">Rating</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6} className="service-col">
          <div className="service-img-wrapper">
            <img src="https://via.placeholder.com/500x300.png" alt="Service 3" className="service-img" />
          </div>
          <div className="service-details">
            <h3>Customer 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at massa sapien.</p>
            <Button variant="primary">Rating</Button>
          </div>
        </Col>
        <Col xs={12} lg={6} className="service-col">
          <div className="service-img-wrapper">
            <img src="https://via.placeholder.com/500x300.png" alt="Service 4" className="service-img" />
          </div>
          <div className="service-details">
            <h3>Customer 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at massa sapien.</p>
            <Button variant="primary">Rating</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
