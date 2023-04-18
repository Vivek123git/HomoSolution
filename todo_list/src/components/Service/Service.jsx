import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import "./Service.css";
import Skelton from "./Skelton";

function Service() {
  const [state, setState] = useState({
    image: "",
    heading: "",
    paragraph: "",
  });

  const [service, setService] = useState([]);

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // let data=JSON.stringify({
  //   email:state.email,
  //   password:state.password,
  //   name:state.name,
  //   mobile:state.mobile
  // })

  const fetchServiceData = () => {
    axios
      .get("https://onehomesolution.000webhostapp.com/fetch-service", {
        options,
      })
      .then((res) => {
        setService(res.data.data);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  return (
    <section className="main-section py-4">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="service_headinng text-center">
              <h3 style={{ color: "#71a1e9" }} className="py-4">
                Our Services
              </h3>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {service.length > 0 ? (
                service.map((elem, index) => {
                  return (
                    <div className="col-md-4 col-sm-12">
                      <Card className="card">
                        <Card.Img variant="top" src={elem.image} />
                        <Card.Body>
                          <Card.Title>{elem.heading}</Card.Title>
                          {/* <Card.Text>{elem.paragraph}</Card.Text> */}
                          <Link to="/electrician">
                            <div className="service_btn text-center pb-3">
                              <Button variant="primary ">
                                Book Electrician
                              </Button>
                            </div>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })
              ) : (
                <div className="p-3 m-2" style={{justifyContent:"space-evenly"}}>
                  <Skelton />
                  
                </div>
              )}
            </Row>
          </div>
        </div>
      </div>

      {/* <Col md={4}  className="shadow-lg p-3 mb-5 bg-white rounded cardBody">
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/04/21/02/43/plumber-6195292__340.png" />
              <Card.Body>
                <Card.Title>Plumbing Services</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis .
                </Card.Text>
                <Link to="/plumber"><Button variant="primary">Book Plumber</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}  className="shadow-lg p-3 mb-5 bg-white rounded cardBody">
            <Card>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1292780000/vector/air-conditioner-installation-by-service-technicians-at-home.jpg?s=612x612&w=0&k=20&c=urBjtAMHm6eifiOw8r_U1_HU-qOSKUoMm6zZ1hL1LSQ=" />
              <Card.Body>
                <Card.Title>A.C. Technician</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis .
                </Card.Text>
                <Link to="/actech"><Button variant="primary">Book AC Technician</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}  className="shadow-lg p-3 mb-5 bg-white rounded cardBody">
            <Card>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1284077647/photo/reverse-osmosis-water-purification-system-at-home-installed-water-purification-filters-clear.jpg?b=1&s=170667a&w=0&k=20&c=ZugpGqIHT4Lp3hOSbtpVE60fsHShmkl15PZM4Byoz8Y=" />
              <Card.Body>
                <Card.Title>R.O. Repairing</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis .
                </Card.Text>
                <Link to="/roservice"><Button variant="primary">Book RO Service</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}  className="shadow-lg p-3 mb-5 bg-white rounded cardBody">
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559__340.jpg" />
              <Card.Body>
                <Card.Title>CCTV Services</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis .
                </Card.Text>
                <Link to="/cctv"><Button variant="primary">Book CCtv</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}  className="shadow-lg p-3 mb-5 bg-white rounded cardBody">
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2012/04/11/17/19/router-29021__340.png" />
              <Card.Body>
                <Card.Title>Broadband services</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis .
                </Card.Text>
                <Link to="/broadband"><Button variant="primary">Book BroadBand</Button></Link>
              </Card.Body>
            </Card>
          </Col> */}

      {/* </Container> */}
    </section>
  );
}

export default Service;
