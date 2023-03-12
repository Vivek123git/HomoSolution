import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar'
import './Cctv.css';

const Cctv=()=> {
  return (
    <section className="main-section">
      <Container>
        <Navbar/>
        <h3 style={{display:"flex", justifyContent:"center" ,marginBottom:"15px"}}>Book Your Skilled Electrician </h3>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/08/22/13/37/electrician-4423534__340.jpg" />
              <Card.Body>
                <Card.Title>Home Wiring Problem</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis elementum pharetra.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/04/21/02/43/plumber-6195292__340.png" />
              <Card.Body>
                <Card.Title>Fan Winding</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis elementum pharetra.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1292780000/vector/air-conditioner-installation-by-service-technicians-at-home.jpg?s=612x612&w=0&k=20&c=urBjtAMHm6eifiOw8r_U1_HU-qOSKUoMm6zZ1hL1LSQ=" />
              <Card.Body>
                <Card.Title>Electronics equipment</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis elementum pharetra.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1284077647/photo/reverse-osmosis-water-purification-system-at-home-installed-water-purification-filters-clear.jpg?b=1&s=170667a&w=0&k=20&c=ZugpGqIHT4Lp3hOSbtpVE60fsHShmkl15PZM4Byoz8Y=" />
              <Card.Body>
                <Card.Title>Inverter Repairing</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis elementum pharetra.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559__340.jpg" />
              <Card.Body>
                <Card.Title>Switch/Socket Replacement</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis elementum pharetra.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2012/04/11/17/19/router-29021__340.png" />
              <Card.Body>
                <Card.Title>Power Circuit testing</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis elementum pharetra.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cctv;
