import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import { FaFileDownload } from "react-icons/fa";
import ResumePDF from "../../assets/Jaiganesh K.pdf";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";


export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Jaiganesh K 
              </h1>

              <h1 className="heading-name-home">
                <strong className="main-name"> Aspiring Data Analyst with hands-on project and internship experience, passionate about turning data into actionable insights. </strong>
                Eager to contribute analytical thinking and problem-solving skills in a professional environment.
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/Jaiganesh-11"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/jaiganesh-k-296202263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.instagram.com/_jaiganesh_11/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="mailto:jaiganesh6074@gmail.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaGoogle />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href={ResumePDF}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons resume-btn"
                    >
                      <FaFileDownload />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              md={4}
              className="home-img-col"
            >
              <Fade>
                <img
                  src="./profile_jai.png"
                  alt="home pic"
                  className="home-profile-img"
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
