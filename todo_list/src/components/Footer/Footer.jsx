import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Content Writing</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">123 Main Street</a></li>
              <li><a href="#">Suite 300</a></li>
              <li><a href="#">New York, NY 10001</a></li>
              <li><a href="#">555-555-5555</a></li>
              <li><a href="#">info@yoursite.com</a></li>
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
