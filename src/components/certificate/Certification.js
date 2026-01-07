import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import aws from "../../images/aws_certificate.jpeg";
import googleCyber from "../../images/google_cybersecurity.png";
import ibmDS from "../../images/ibm_datascience.jpeg";

export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.linkedin.com/posts/jaiganesh-k-296202263_happy-to-share-that-ive-completed-the-aws-activity-7339980891961643008-xcLl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECi1xIBVlWHKf1_JHhpwPLUCxhTs7Ma-iI"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={aws} alt="AWS Certificate" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          AWS academy cloud foundations
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - AWS Academy
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.linkedin.com/posts/jaiganesh-k-296202263_completed-cybersecurity-course-in-google-activity-7232968496475688960-Cm76?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECi1xIBVlWHKf1_JHhpwPLUCxhTs7Ma-iI"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={googleCyber} alt="Google Cybersecurity" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Google Cybersecurity Certificate
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Google
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.linkedin.com/posts/jaiganesh-k-296202263_python-101-for-data-science-activity-7359274451256922112-_7gj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECi1xIBVlWHKf1_JHhpwPLUCxhTs7Ma-iI"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={ibmDS} alt="IBM Data Science" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Python 101 for Data Science
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - IBM
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}