import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Customer from "./Customer/Customer";
import { Carousel } from "react-bootstrap";
import ChatBotrobo from "./Chatbot";
// import HOMOSOLUTION from '../img/HOMOSOLUTION.png'

function Header() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-md-12 p-0">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2019/08/22/13/37/electrician-4423534__340.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Electrician</h3>
                  <p>The Best Solution of your all Home problem</p>
                  <button className="btn">Book Now</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2021/04/21/02/43/plumber-6195292__340.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Plumbers</h3>
                  <p>The Best Solution of your all Home problem.</p>
                  <button className="btn">Book Now</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/id/1292780000/vector/air-conditioner-installation-by-service-technicians-at-home.jpg?s=612x612&w=0&k=20&c=urBjtAMHm6eifiOw8r_U1_HU-qOSKUoMm6zZ1hL1LSQ="
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>A.C. Technician</h3>
                  <p>The Best Solution of your all Home problem.</p>
                  <button className="btn">Book Now</button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <section className="add">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Service />
              <About />
              <Customer />
              <Contact />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>
        <ChatBotrobo/>
      </section>
    </>
  );
}
export default Header;
