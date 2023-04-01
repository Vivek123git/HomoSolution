import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../src/App.css'

function NavbarHead() {
  
  const navigate = useNavigate();

  const [show,setShow] = useState(false)

  const handleShow =()=> setShow(true)

  const handleClose = ()=> setShow(false)

  const handleCreate=()=>{
    navigate("/serviceworker")
  }
  const handleLogin = ()=>{
    navigate("/serviceworkerprofile")
  }

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
          <Nav.Link onClick={handleShow}>ServiceWorker</Nav.Link>
          <Nav.Link  as={Link} to="/userprofile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
       {/* </Container> */}

    
       <Modal show={show} onHide={handleClose} centered>
  <Modal.Header closeButton>
    <Modal.Title>
      <h3>Enter in ServiceWorker account</h3>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="d-flex flex-column align-items-center">
      <img
        src="https://img.freepik.com/free-vector/repair-elements-round-template_1284-37691.jpg?w=740&t=st=1680349046~exp=1680349646~hmac=01f506fa402adb9a53b74df1f76fa944ac021ca14fcf1875cc7ead5d08f6cb62"
        alt="ServiceWorker Account"
        className="my-3"
        style={{ maxWidth: "40%" }}
      />
      <div className="text-center">
        <p className="mb-2">
          If you already have an account, please click the login button below.
        </p>
        <p className="mb-2">
          If you don't have an account yet, you can create one by clicking the
          create button.
        </p>
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Button variant="success" size="lg" onClick={handleCreate} className="my-2 w-100">
        Create account
      </Button>
      <Button variant="primary" size="lg" onClick={handleLogin} className="my-2 w-100">
        Login
      </Button>
    </div>
  </Modal.Footer>
</Modal>


     </>
  );
}

export default NavbarHead;