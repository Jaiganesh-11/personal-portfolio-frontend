import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

const SkillCard = ({ percent, color, width, label, barId }) => (
  <Col md={4}>
    <h1 style={{ fontSize: "100px", color, fontWeight: 700 }}>
      {percent}%
    </h1>
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          id={barId}
          aria-valuenow={width}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${width}%`, backgroundColor: color }}
        ></div>
      </div>
      <h2
        style={{
          color,
          fontSize: "25px",
          marginTop: "13px",
          fontWeight: 700,
        }}
      >
        {label}
      </h2>
    </div>
  </Col>
);

export default function TechnicalSkill() {
  return (
    <div>
      {/* Navigation Buttons */}
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skills
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skills
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>

      {/* Heading */}
      <Tada>
        <h1 className="mt-4 text-center">Professional Technical Expertise</h1>
      </Tada>

      {/* Skills */}
      <div className="mt-5">
        <Container>
          <Row className="g-5">

            {/* Programming Languages */}
            <SkillCard percent={60} color="#fe3e57" width={85} label="Power BI" barId="Power" />
            <SkillCard percent={80} color="#39c4ff" width={90} label="Python Development" barId="python" />
            <SkillCard percent={65} color="#54faae" width={85} label="C Programming" barId="c" />

            {/* Web Technologies */}
            <SkillCard percent={71} color="#f1f965" width={81} label="JavaScript" barId="js" />
            <SkillCard percent={85} color="#41f2ff" width={86} label="Frontend Development" barId="react" />
            <SkillCard percent={70} color="#ff8c2f" width={86} label="Backend Development" barId="node" />

          </Row>
        </Container>
      </div>
    </div>
  );
}
