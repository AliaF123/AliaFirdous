import React from "react";
import "../styles/projects.scss";

const projects = [
  {
    title: "My Portfolio",
    description: "A fully responsive and interactive portfolio built with React, SCSS, and JavaScript. This project showcases my skills, experiences, and design capabilities.",
    link: "https://github.com/AliaF123/MY_PORTFOLIO"
  },
  {
    title: "Employee Management System",
    description: "https://github.com/AliaF123/Employee-Project-Management",
    link: "https://github.com/AliaF123"
  },
  {
    title: "QR code Generator",
    description: "The Flight Price Prediction Web App will allow users to input flight details (such as departure and destination cities, flight class, etc.) and get a predicted flight price using a machine learning model.",
    link: "https://github.com/AliaF123/python_learning/blob/main/QRcode%20genrator.ipynb"
  },
  {
    title: "Fraud Detection",
    description: "Credit Card Fraud Detection trained model using K means Clustering",
    link: "https://github.com/AliaF123/Fraud_Detection"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-gallery">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
