import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../../src/App.css";
import logo from "../../img/HOMOSOLUTION.png";
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarHead() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });

  const handleShow = () => setShow(true);
  const handleShow1 = () => {
    setShow1(true);
    handleClose(false);
  };

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);

  const handleCreate = () => {
    navigate("/serviceworker");
  };

  const handleChange = () => {};

  const handleSubmit = () => {
    navigate("/serviceworkerProfile");
  };

  return (
    <>
      <div className="nav_head">
        <Navbar
          style={{ backgroundColor: "#71a1e9", borderRadius: "0px" }}
          expand="lg"
          className="navigation"
        >
          <Navbar aria-controls="basic-navbar-nav" />
          <img
            src={logo}
            alt=""
            style={{ width: "80px", height: "80px", marginLeft: "9px" }}
          />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
           <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
          <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  HomoSolution
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
          {/* <Navbar.Offcanvas id="basic-navbar-nav"> */}
            <Nav className="justify-content-end me-auto my-2  flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                About Us
              </Nav.Link>
              <Nav.Link onClick={handleShow}>ServiceWorker Account</Nav.Link>
              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/electrician">
                  Electrician
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/plumber">
                  Plumber
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/actech">
                  AC technician
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/roservice">
                  {" "}
                  RO Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cctv">
                  {" "}
                  CCTV Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/broadband">
                  {" "}
                  BroadBand Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/home">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/userprofile">
                User Profile
              </Nav.Link>
            </Nav>
         
          </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </div>

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
                If you already have an account, please click the login button
                below.
              </p>
              <p className="mb-2">
                If you don't have an account yet, you can create one by clicking
                the create button.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <Button
              variant="success"
              size="lg"
              onClick={handleCreate}
              className="my-2 w-100"
            >
              Create account
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleShow1}
              className="my-2 w-100"
            >
              Login
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Mobile No."
                  value={form.mobile}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
}

export default NavbarHead;
