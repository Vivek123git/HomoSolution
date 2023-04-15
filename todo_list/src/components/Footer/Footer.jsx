import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
   <div className="footer_section backColor">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Services</h5>
            <ul className="list-unstyled ">
              <li>Electrician</li>
              <li>Plumbering</li>
              <li>AC Technician</li>
              <li>RO repairing</li>
              <li>CCTV Services</li>
              <li>BroadBand Services</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Lucknow , Chinhat </li>
              <li>Matiyari</li>
              <li>Deva Road, Woods Apartment</li>
              <li>555-555-5555</li>
              <li>info@yoursite.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              blandit enim a metus rhoncus, non facilisis libero sagittis.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
