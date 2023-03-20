import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <footer >
      <Container style={{backgroundColor:"#71a1e9", borderRadius:"20px",borderColor:"10px solid blue"}}>
        <Row>
          <Col md={4} className="footer-section ">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>SEO</li>
              <li>Content Writing</li>
            </ul>
          </Col>
          <Col md={4} className="footer-section ">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>Suite 300</li>
              <li>New York, NY 10001</li>
              <li>555-555-5555</li>
              <li>info@yoursite.com</li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit enim a metus rhoncus, non facilisis libero sagittis. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
