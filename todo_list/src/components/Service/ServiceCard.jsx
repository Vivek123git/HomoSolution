import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";
import "../../../src/App.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSubServices } from "../../Action/ServiceAction";
import Skelton from "./Skelton";
import { onSetAlert } from "../../Action/AlertAction";
import Alert1 from "../Alert";

const ServiceCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const sId = searchParams.get("sId");
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  const [services, setServices] = useState([]);
  const [sid, setSid] = useState(sId);



  let formData = new FormData(); 
  formData.append("id", sid); 

  const onFetchSubServices = () => {
    dispatch(fetchSubServices(formData, setServices));
  };

  const handleClick = (name,ind) => {
    if (id == "1") {
      navigate(`/byown?name=${name}&id${ind}`);
    } else if (id === "2") {
      console.log("first")
      navigate("/oursite");
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newSId = searchParams.get("sId");
    setSid(newSId);

  }, [location]);

  useEffect(() => {
    onFetchSubServices();
    
  }, [sid]);

  return (
    <>
    
      <Navbar />
      <Alert1/>
      <section className="main-section">
        <Container>
          <div className="service_headinng text-center">
            <h3 style={{ color: "#71a1e9" }}>Book Your Skilled {name} </h3>
          </div>
          <div className="search_inp">
            <input type="text"/>
          </div>
          
          <Row>
            <Col md={4} className=" p-3 mb-5 bg-white rounded cardBody">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2019/08/22/13/37/electrician-4423534__340.jpg"
                />
                <Card.Body>
                  <Card.Title>Home Wiring Problem</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae .
                  </Card.Text>
                  <Button variant="primary" onClick={handleClick}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {services.length > 0 ?
              services.map((elem, ind) => {
                console.log(elem, "elem");
                return (
                  <Col
                    key={ind}
                    md={4}
                    className=" p-3 mb-5 bg-white rounded cardBody"
                  >
                    <Card>
                      <Card.Img variant="top" src={elem.image} />
                      <Card.Body style={{backgroundColor:"#71a1e9",paddingTop:"20px",paddingBottom:"0px"}} >
                        <Card.Title>{elem.heading}</Card.Title>
                        <Card.Text>{elem.paragraph}</Card.Text>
                        <div className=" text-center pb-3" style={{display:"flex",justifyContent:"space-between"}} >
                        <Button variant="primary" onClick={()=>handleClick(elem.heading,elem.workerId)}>{id==="2"?"Book Now":"Get Serviceworker Details"}</Button>
                        {id==="2"?<Button style={{float:"right"}}>Price {elem.price}</Button>:""}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              }): (
                <div className="p-3 m-2" style={{justifyContent:"space-evenly"}}>
                  <Skelton />
                  
                </div>
              )}

            {/* <Col md={4} className=" p-3 mb-5 bg-white rounded cardBody">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2021/04/21/02/43/plumber-6195292__340.png"
                />
                <Card.Body>
                  <Card.Title>Fan Winding</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis .
                  </Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className=" p-3 mb-5 bg-white rounded cardBody">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1292780000/vector/air-conditioner-installation-by-service-technicians-at-home.jpg?s=612x612&w=0&k=20&c=urBjtAMHm6eifiOw8r_U1_HU-qOSKUoMm6zZ1hL1LSQ="
                />
                <Card.Body>
                  <Card.Title>Electronics equipment</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis .
                  </Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className=" p-3 mb-5 bg-white rounded cardBody">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1284077647/photo/reverse-osmosis-water-purification-system-at-home-installed-water-purification-filters-clear.jpg?b=1&s=170667a&w=0&k=20&c=ZugpGqIHT4Lp3hOSbtpVE60fsHShmkl15PZM4Byoz8Y="
                />
                <Card.Body>
                  <Card.Title>Inverter Repairing</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis elementum pharetra.
                  </Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className=" p-3 mb-5 bg-white rounded cardBody">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559__340.jpg"
                />
                <Card.Body>
                  <Card.Title>Switch/Socket Replacement</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis .
                  </Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className=" p-3 mb-5 bg-white rounded cardBody">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2012/04/11/17/19/router-29021__340.png"
                />
                <Card.Body>
                  <Card.Title>Power Circuit testing</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis .
                  </Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select an option</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleModal(e)}
            >
              <option>Open this select menu</option>
              <option value="1">Booking by Yourself</option>
              <option value="2">Booking By Our Platform</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleGo}>
              Go
            </Button>
          </Modal.Footer>
        </Modal> */}
      </section>
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>
    </>
  );
};

export default ServiceCard;
