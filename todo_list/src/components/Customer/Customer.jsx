import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Customer.css";

function Services() {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="co-lg-12 p-0">
          <div className="services-container backColor">
            <div className="customer_heading text-center">
              <h3
                style={{
                  justifyContent: "center",
                  marginBottom: "35px",
                  color: "#fff",
                }}
              >
                 See how customer love us We give Awesome Service
              </h3>
            </div>
            <swiper-container
              className="mySwiper"
              pagination="true"
              pagination-clickable="true"
              navigation="true"
              space-between="30"
              centered-slides="true"
              autoplay-delay="2500"
              autoplay-disable-on-interaction="false"
            >
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://via.placeholder.com/500x300.png"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://via.placeholder.com/500x300.png"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://via.placeholder.com/500x300.png"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://via.placeholder.com/500x300.png"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://via.placeholder.com/500x300.png"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>

              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span></span>
              </div>
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
