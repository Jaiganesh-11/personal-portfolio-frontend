import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                I’m <b className="purple">I'm Jaiganesh K</b>, an aspiring Data Analyst with a strong interest in
                 <b className="purple"> transforming data into meaningful insights
                  </b> that <b className="purple">support</b> informed business decisions.
                <br />
                <br />
                Through academic projects, <b className="purple">internships, and continuous learning,</b> I have developed analytical <b className="purple">thinking and problem-solving skills</b> while working on data-driven
                 <b className="purple"> solutions and</b> real-world applications.
                <br />      
                <br />
                I have hands-on experience <b className="purple">in data analytics, data visualization,</b>, <b className="purple"> and dashboard development, enabling me to extract</b>,
                valuable insights and communicate findings effectively.
                <br />
                <br /> 
                Alongside analytics, <b className="purple">I have built responsive</b>, <b className="purple">web applications and worked</b>,
                with modern development technologies, giving me a strong foundation in both data and software development.
                <br />
                <br />  

                As a recent engineering graduate<b className="purple"> , I am eager to contribute, learn</b>, <b className="purple">and grow in a professional environment while helping organizations</b>,
                make data-driven and technology-focused decisions.
              </p>  

            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;

