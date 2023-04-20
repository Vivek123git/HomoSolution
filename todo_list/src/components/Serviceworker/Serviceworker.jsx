import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Serviceworker.css";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { onCreateServiceman } from "../../Action/ServiceAction";
import { useNavigate } from "react-router";

function ServiceWorker() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    service: "",
    skills: "",
    img: "",
    aadhar: "",
    password: "",
  });

  const handleSelect = (e) => {
    const { value } = e.target;
    if (value === "1") {
      setForm({
        ...form,
        service: "Electrician",
      });
    } else if (value === "2") {
      setForm({
        ...form,
        service: "Plumbering",
      });
    } else if (value === "3") {
      setForm({
        ...form,
        service: "AC Services",
      });
    } else if (value === "4") {
      setForm({
        ...form,
        service: "RO Services",
      });
    } else if (value === "5") {
      setForm({
        ...form,
        service: "CCTV Services",
      });
    } else if (value === "6") {
      setForm({
        ...form,
        service: "BroadBand Services",
      });
    }
  };

  const data = {
    name: form.name,
    service: form.service,
    skills: form.skills,
    mobile: form.mobile,
    description: form.description,
    address: form.address,
    password: form.password,
    img: form.img,
    aadhar: form.aadhar,
    password: form.password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onCreateServiceman(data));
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    const file = name[0];

    if (name === "image") {
      if (file && (file.type === "image/jpeg" || file.type === "image/jpg")) {
        setForm({ ...form, img: value });
      }
    } else if (name === "file") {
      if (
        file &&
        (file.type === "image/jpeg" ||
          file.type === "image/jpg" ||
          file.type === "application/pdf")
      ) {
        setForm({ ...form, aadhar: value });
      }
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = () => {
    // navigate("/serviceworkerprofile");
  };

  return (
    <>
      <Navbar />
      <section className="contact-section ">
        <div className="container-fluid main_bg">
          <div className="col-md-12">
            <div className="header p-4">
              <h1 style={{ fontSize: "33px" }}>
                Create Your account as ServiceWorker
              </h1>
            </div>
          </div>

          <div className="service_headinng text-center">
            <h3 style={{ color: "#71a1e9" }}>
              Fill this form we will contact you soon for Verification...{" "}
            </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="create_page ">
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 p-2">
                      <Form.Group
                        as={Col}
                        controlId="formName"
                        className="input_wrap"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          name="name"
                          value={form.name}
                          onChange={(e) => handlehange(e)}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group
                        as={Col}
                        controlId="formMobile"
                        className="input_wrap"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter mobile number"
                          name="mobile"
                          value={form.mobile}
                          onChange={(e) => handlehange(e)}
                        />
                        <Button
                          variant="primary"
                          type="submit"
                          style={{
                            float: "right",
                            padding: "5px",
                            marginTop: "20px",
                          }}
                        >
                          OTP send
                        </Button>
                      </Form.Group>
                    </div>

                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Choose Your Service</Form.Label>
                        <Form.Control
                          as="select"
                          //   value={selectBox2}
                          onChange={handleSelect}
                          required
                        >
                          <option value="">Select an option</option>
                          <option value={1}>Electrician</option>
                          <option value={2}>Plumbing</option>
                          <option value={3}>AC Technician</option>
                          <option value={4}>RO Services</option>
                          <option value={5}>CCTV Services</option>
                          <option value={6}>BroadBand Services</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Choose Your Skills</Form.Label>
                        <Form.Control
                          as="select"
                          //   value={selectBox2}
                          //   onChange={handleSelectBox2Change}
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Form.Control>
                      </Form.Group>
                    </div>

                    <div className="col-md-12 p-2">
                      <Form.Group
                        controlId="formAddress"
                        className="input_wrap"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter address"
                          name="address"
                          value={form.address}
                          onChange={(e) => handlehange(e)}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Upload Your Image</Form.Label>
                        <Form.Control
                          type="file"
                          name="image"
                          // accept="image/*"
                          onChange={(e) => handlehange(e)}
                          value={form.img}
                          accept="image/jpeg,image/jpg"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Upload Your Aadhar Card (pdf)</Form.Label>
                        <Form.Control
                          type="file"
                          // accept=".pdf/jpg"
                          accept="application/pdf,image/jpeg,image/jpg"
                          name="file"
                          onChange={(e) => handlehange(e)}
                          value={form.aadhar}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          // value={password}
                          // onChange={handlePasswordChange}
                          required
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          // value={password}
                          // onChange={handlePasswordChange}
                          required
                        />
                      </Form.Group>
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleCreate}
                      style={{
                        width: "36%",
                        height: "60px",
                        margin: "25px auto",
                      }}
                    >
                      Create Account
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceWorker;
