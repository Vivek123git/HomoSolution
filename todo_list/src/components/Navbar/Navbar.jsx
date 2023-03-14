import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import HOMOSOLUTION from '../../img/HOMOSOLUTION.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../src/App.css'

function Header() {
  return ( 
      <Navbar bg="" expand="lg" className="navigation backColor" >
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end me-auto my-2  flex-grow-1 pe-3">
          <Nav.Link as={Link}  to="/">Home</Nav.Link>
          <NavDropdown title="Our Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/electrician">Electrician</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/plumber">Plumber</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/actech">AC technician</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/roservice"> RO Services</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/cctv"> CCTV Services</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/broadband"> BroadBand Services</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link as={Link} to="/">About Us</Nav.Link>
          <Nav.Link  as={Link} to="/">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;
