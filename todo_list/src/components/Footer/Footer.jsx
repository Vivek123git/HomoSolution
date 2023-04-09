import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <footer >
      {/* <Container style={{backgroundColor:"#71a1e9", borderRadius:"0px",borderColor:"10px solid blue",padding:"40px"}}> */}
        <Row style={{backgroundColor:"#71a1e9", borderRadius:"0px",borderColor:"10px solid blue",padding:"20px"}}>
          <Col md={4} className="footer-section ">
            <h5>Services</h5>
            <ul className="list-unstyled text-light">
              <li>Electrician</li>
              <li>Plumbering</li>
              <li>AC Technician</li>
              <li>RO repairing</li>
              <li>CCTV Services</li>
              <li>BroadBand Services</li>
            </ul>
          </Col>
          <Col md={4} className="footer-section ">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Lucknow , Chinhat </li>
              <li>Matiyari</li>
              <li>Deva Road, Woods Apartment</li>
              <li>555-555-5555</li>
              <li>info@yoursite.com</li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit enim a metus rhoncus, non facilisis libero sagittis. </p>
          </Col>
        </Row>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
