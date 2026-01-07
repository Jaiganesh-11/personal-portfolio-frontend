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
                I’m <b className="purple">Jaiganesh K</b>, a passionate web developer focused on
                building <b className="purple">responsive</b> and <b className="purple">dynamic</b> web
                applications that deliver real value.
                <br />
                <br />
                I help <b className="purple">businesses</b> and <b className="purple">individuals</b> design,
                build, fix, and optimize <b className="purple">modern web solutions</b> with clean
                design and solid performance.
                <br />
                <br />
                I work with core web technologies such as&nbsp;
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, Python
                </b>
                &nbsp;and leverage modern tools to create scalable and user-friendly applications.
                <br />
                <br />
                I have hands-on experience with frameworks and libraries including&nbsp;
                <b className="purple">
                  {" "}
                  React, NodeJS, Django, Pandas, and NumPy
                </b>,
                enabling me to build complete end-to-end solutions.
                <br />
                <br />
                I believe in <b className="purple">clear communication</b>, <b className="purple">timely delivery</b>,
                and crafting solutions that align perfectly with client goals.
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

