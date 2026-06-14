import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import githubDesktop from "../../../images/githubDesktop.png";
import github from "../../../images/github.png";
import pg from "../../../images/pg.png";
import pm from "../../../images/pm.png";
import Excel from "../../../images/Excel.png";
import Tableau from "../../../images/tableau.png";
import Powerbi from "../../../images/Powerbi.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      {/* Navigation Buttons */}
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>

      {/* Title */}
      <Zoom left cascade>
        <h1 className="mt-4 text-center">Tools I Use</h1>
      </Zoom>

      {/* Tools I Use */}
      <Container className="mt-5">
  {/* Tools I Use */}
  <h3 className="tool-section-title">Tools I Use</h3>

  <Row className="tool-grid">
        <Col xs={6} md={3} className="tool-box">
  <img src={Excel} alt="Advanced Excel" />
  <p>Advanced Excel</p>
</Col>

<Col xs={6} md={3} className="tool-box">
  <img src={Powerbi} alt="Power BI" />
  <p>Power BI</p>
</Col>

    <Col xs={6} md={3} className="tool-box">
      <img src={Tableau} alt="Tableau" />
      <p>Tableau</p>
    </Col>
    <Col xs={6} md={3} className="tool-box">
      <img src={vs} alt="VS Code" />
      <p>VS Code</p>
    </Col>

    <Col xs={6} md={3} className="tool-box">
      <img src={githubDesktop} alt="GitHub Desktop" />
      <p>GitHub Desktop</p>
    </Col>

    <Col xs={6} md={3} className="tool-box">
      <img src={github} alt="GitHub" className="github-icon" />
      <p>GitHub</p>
    </Col>
    
  </Row>

  {/* Currently Exploring */}
  <h3 className="tool-section-title mt-5">Currently Exploring</h3>

  <Row className="tool-grid">
    <Col xs={6} md={3} className="tool-box">
      <img src={pc} alt="PyCharm" />
      <p>PyCharm</p>
    </Col>

    <Col xs={6} md={3} className="tool-box">
      <img src={pg} alt="PostgreSQL" />
      <p>PostgreSQL</p>
    </Col>

    <Col xs={6} md={3} className="tool-box">
      <img src={pm} alt="Postman" />
      <p>Postman</p>
    </Col>
  </Row>
</Container>

    </div>
  );
}
