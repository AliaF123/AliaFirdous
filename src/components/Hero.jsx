import React from "react";
import "../styles/hero.scss";
import profileImage from "../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Profile Picture */}
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>

      <div className="hero-content">
        <h1>Hi, I am Alia Firdous</h1>
            <p>
  Software Development Analyst with 6+ years of experience in full-stack web development. Skilled in Angular, React, Java, and Azure. Currently exploring AI to build smarter, user-centric applications.
</p>
        <div className="view-btn">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
