import React from "react";
import "../styles/hero.scss";
import profileImage from "../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Profile Picture */}
      <div className="profile-image">   
      <img src={profileImage} alt="Profile"/>
      </div>

      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate developer specializing in building modern and
          responsive web applications. Let's create something amazing together!
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
