import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Serviceworker.css";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { fetchSubServicesData, onCreateServiceman } from "../../Action/ServiceAction";
import { useNavigate } from "react-router";
import Multiselect from "multiselect-react-dropdown";

function ServiceWorker() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    service: "",
    skills: [],
    img: null,
    aadhar: null,
    password: "",
    cnfPassword: "",
  });
  const [servicesData, setServicesData] = useState([]);

  const options = [
    { name: "Option 1", id: 1 },
    { name: "Option 2", id: 2 },
    { name: "Option 4", id: 4 },
    { name: "Option 5", id: 5 },
    { name: "Option 8", id: 8 },
    { name: "Option 29", id: 9 }
  ];

  const [selectedValues, setSelectedValues] = useState([]);

  function onSelect(selectedList, selectedItem) {
    setSelectedValues(selectedList);
    console.log(`Selected List: ${selectedList}`);
    console.log(`Selected Item: ${selectedItem}`);
  }

  function onRemove(selectedList, removedItem) {
    setSelectedValues(selectedList);
    console.log(`Selected List: ${selectedList}`);
    console.log(`Removed Item: ${removedItem}`);
  }

  console.log(form.service);
  const handleSelect = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    const file = e.target.files[0];
    console.log(file, "file");
    if (name === "image") {
      if (file) {
        console.log("first");
        setForm({ ...form, img: file });
      }
    } else if (name === "aadhar") {
      if (file) {
        console.log("first");
        setForm({ ...form, aadhar: file });
      }
    }
  };

  let formData = new FormData(); //formdata object

  formData.append("name", form.name);
  formData.append("service", form.service);
  formData.append("skill", form.skills);
  formData.append("mobile", form.mobile);
  formData.append("address", form.address);
  formData.append("password", form.password);
  formData.append("image", form.img);
  formData.append("file", form.aadhar);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onCreateServiceman(formData));
  };

  useEffect(()=>{
    let data={}
   dispatch(fetchSubServicesData(data,setServicesData))
  },[])

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
                          name="service"
                          value={form.service}
                          onChange={handleSelect}
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
                        <Multiselect
                          options={options}
                          selectedValues={selectedValues}
                          onSelect={onSelect}
                          onRemove={onRemove}
                          displayValue="name"
                        />
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
                      <Form>
                        <Form.Group as={Col} className="input_wrap">
                          <Form.Label>Upload Your Image</Form.Label>
                          <Form.Control
                            type="file"
                            name="image"
                            onChange={handlehange}
                            accept="image/jpeg,image/jpg"
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Upload Your Aadhar Card (pdf)</Form.Label>
                        <Form.Control
                          type="file"
                          //  accept=".pdf/jpg"
                          accept="application/pdf,image/jpeg,image/jpg"
                          name="aadhar"
                          onChange={handlehange}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          value={form.password}
                          onChange={(e) => handlehange(e)}
                          // required
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="cnfPassword"
                          placeholder="Enter password"
                          value={form.cnfPassword}
                          onChange={(e) => handlehange(e)}
                          // required
                        />
                      </Form.Group>
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
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
