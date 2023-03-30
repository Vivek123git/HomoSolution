import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import team from '../../img/team.png.jpg'
import './About.css';

function About() {
  return (
    <section className="about-section backColor">
      <Container>
        <Row style={{padding:"40px"}}>
          <Col md={6}>
            <Image src={team} alt="About Us" fluid />
          </Col>
          <Col md={6}>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis elementum pharetra. Nullam lobortis erat ligula, vel mattis turpis suscipit at. Nam ac purus eu nunc blandit viverra. Donec ullamcorper risus ac augue eleifend, a porttitor tortor varius. Suspendisse gravida ut arcu in bibendum.</p>
            <p>Phasellus eu metus quis augue ultricies congue. Sed tincidunt eros nibh, ut consequat quam eleifend non. Fusce sit amet urna leo. Fusce sodales consectetur ex, nec bibendum justo pharetra id. Nulla laoreet.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
