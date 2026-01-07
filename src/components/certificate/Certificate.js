import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cbta from "../../images/CBT&A.pdf";
import aws from "../../images/aws_certificate.jpeg";
import googleCyber from "../../images/google_cybersecurity.png";
import ibmDS from "../../images/ibm_datascience.jpeg";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={aws}
                alt="AWS Certificate"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={googleCyber}
                alt="Google Cybersecurity Certificate"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={ibmDS}
                alt="IBM Data Science Certificate"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
