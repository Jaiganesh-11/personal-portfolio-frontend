import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>

      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>

        {/* Experience 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-card"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Sutherland Global Services
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Non-Voice Process Associate (Contract)
          </h6>
          <p>Worked as a Non-Voice Process Associate, handling customer support operations through email and chat-based communication while ensuring service quality and accuracy.</p>
          <p>Processed customer requests, resolved queries, and maintained detailed records in accordance with organizational guidelines and service standards.</p>
          <p>Developed strong communication, problem-solving, time management, and attention-to-detail skills while working in a fast-paced professional environment.</p>
        </VerticalTimelineElement>

        {/* Experience 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-card"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Levizen
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Frontend Developer
          </h6>

          <p>
            Worked as a Frontend Developer, contributing to the design and development of
            responsive and user-friendly web applications.
          </p>
          <p>
            Developed and maintained two production-level websites using modern frontend
            technologies, ensuring clean UI, consistent styling, and cross-browser compatibility.
          </p>
          <p>
            Collaborated with team members to translate business requirements into functional
            web interfaces, focusing on performance, usability, and visual consistency.
          </p>
        </VerticalTimelineElement>

        {/* Experience 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-card"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Elevate Lab
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            AI / ML Intern
          </h6>
          <p>Built and deployed an AI storytelling application using Python, NLP, and Streamlit, generating 100+ interactive stories in real time.</p>
          <p>Designed and optimized machine learning workflows for training, testing, and deployment, reducing preprocessing time by 25%.</p>
          <p>Deployed the application on Streamlit Cloud and documented workflows, improving onboarding efficiency by 30%.</p>
        </VerticalTimelineElement>

        {/* Experience 4 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-card"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Gradtwin
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Science Intern
          </h6>
          <p>Developed an AI-powered resume-to-job matching system using Machine Learning and NLP, improving alignment accuracy by 15%.</p>
          <p>Automated data preprocessing and built an interactive Streamlit dashboard, reducing manual effort by 40%.</p>
          <p>Prepared evaluation reports and project presentations, with 80% of mentors rating insights as actionable.</p>
        </VerticalTimelineElement>
        
        {/* Experience 5 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work experience-card"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Chennai Metro Rail Limited (CMRL)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            AFC Intern (Automatic Fare Collection Team)
          </h6>
          <p>Completed internship training under the Automatic Fare Collection (AFC) team, gaining exposure to metro ticketing systems and smart card operations.</p>
          <p>Observed the functioning, maintenance, and troubleshooting of fare collection equipment, including ticket vending machines, gate systems, and backend operations.</p>
          <p>Developed an understanding of system monitoring, operational workflows, and technology integration in large-scale public transportation infrastructure.</p>
        </VerticalTimelineElement>

        {/* End Icon */}
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
