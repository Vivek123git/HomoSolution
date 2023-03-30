import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import HOMOSOLUTION from '../../img/HOMOSOLUTION.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../src/App.css'

function NavbarHead() {
  return ( 
     <>
        {/* <Container> */}
        <Navbar style={{backgroundColor:"#71a1e9", borderRadius:"20px",}} expand="lg" className="navigation " >
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end me-auto my-2  flex-grow-1 pe-3">
          <Nav.Link as={Link}  to="/home">Home</Nav.Link>
          <NavDropdown title="Our Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/electrician">Electrician</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/plumber">Plumber</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/actech">AC technician</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/roservice"> RO Services</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/cctv"> CCTV Services</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/broadband"> BroadBand Services</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link as={Link} to="/home">About Us</Nav.Link>
          <Nav.Link  as={Link} to="/home">Contact Us</Nav.Link>
          <Nav.Link  as={Link} to="/serviceworker">ServiceWorker</Nav.Link>
          <Nav.Link  as={Link} to="/home">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
       {/* </Container> */}
     </>
  );
}

export default NavbarHead;