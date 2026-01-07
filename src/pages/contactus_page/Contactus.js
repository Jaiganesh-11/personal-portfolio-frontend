import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Particle from "../../Particle";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://jaiganesh.pythonanywhere.com/api/submitForm/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      alert(`Thanks ${formData.name}, I will contact you shortly!`);

      // clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Unable to send message. Please try again later.");
    }
  };

  return (
    <div>
      <Container
        fluid
        className="certificate-section contact-page"
        id="about"
        style={{ paddingTop: "90px" }}
      >
        <Particle />

        <Container>
          <Row>
            <Col md={12}>
              <div
                className="d-flex justify-content-center contact-heading-bar"
                style={{ backgroundColor: "#fbd9ad" }}
              >
                <Zoom left cascade>
                  <h1 style={{ color: "rgb(134 61 176)" }}>CONTACT ME</h1>
                </Zoom>
              </div>
            </Col>

            <Col md={12} id="contact" className="mt-3">
              <Row>
                {/* FORM */}
                <Col md={4}>
                  <div className="contacts-form">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label className="label-class">Full Name</label>
                        <input
                          type="text"
                          className="form-input input-class"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-container d-flex flex-column">
                        <label className="label-class">Email address</label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-container d-flex flex-column">
                        <label className="label-class">Message</label>
                        <textarea
                          className="form-message input-class"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>

                {/* CONTACT DETAILS */}
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href="mailto:jaiganesh6074@gmail.com"
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        jaiganesh6074@gmail.com
                      </p>
                    </a>

                    <a href="tel:+917824021515" className="personal-details">
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        +91 78240 21515
                      </p>
                    </a>

                    <a
                      href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68"
                      className="personal-details"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="detailsIcon">
                        <HiOutlineLocationMarker />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        Corporation Colony, 4th Street, Tondiarpet,
                        Chennai-600081
                      </p>
                    </a>
                  </div>

                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d485.6852149481944!2d80.29083520608947!3d13.13198591522518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1767721967966!5m2!1sen!2sin"
                      allowFullScreen
                      loading="lazy"
                      title="Contact Location"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
