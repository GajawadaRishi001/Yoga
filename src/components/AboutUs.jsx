// AboutUs.jsx
import React from "react";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-right">
        <img
          src="/images/yogayellow.jpg"
          alt="Yoga Center"
          className="about-us-image"
        />
      </div>
      <div className="about-us-left">
      <div className="icon-row">
  <LocalFloristIcon className="about-us-icon" style={{ fontSize: '100px' }} />
</div>

        <div className="title-row">
          <h2>
            About <span className="highlight">Us</span>
          </h2>
        </div>
        <div className="description-row">
  <p>
    <strong>
      Welcome to our serene yoga center, where tranquility meets vitality. We
      offer rejuvenating yoga sessions that cater to all levels, creating
      a harmonious space for relaxation and self-discovery.
    </strong>
  </p>
</div>

      </div>
    </div>
  );
};

export default AboutUs;
